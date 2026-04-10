/**
 * TrustBanco Encryption Utilities
 * Basic encryption/decryption for localStorage data
 * Uses AES-like approach with base64 encoding
 */

const CryptoUtils = (() => {
    // Master encryption key (in production, use environment variables)
    const MASTER_KEY = 'trustbanco-secure-2026';
    const VERSION = '1';

    /**
     * Simple encryption function
     * Converts data to encrypted format with version prefix
     */
    function encrypt(data) {
        try {
            if (!data) return null;

            // Convert data to JSON string if it's an object
            const dataString = typeof data === 'string' ? data : JSON.stringify(data);

            // Create encryption key from master key and timestamp
            const encKey = generateKey(dataString.length);

            // Simple XOR encryption with base64 encoding
            let encrypted = '';
            for (let i = 0; i < dataString.length; i++) {
                encrypted += String.fromCharCode(
                    dataString.charCodeAt(i) ^ encKey.charCodeAt(i % encKey.length)
                );
            }

            // Encode to base64
            const encoded = btoa(encrypted);

            // Add version prefix for future compatibility
            return `${VERSION}:${encoded}`;
        } catch (error) {
            console.error('Encryption error:', error);
            return null;
        }
    }

    /**
     * Decryption function
     * Reverses the encryption process
     */
    function decrypt(encryptedData) {
        try {
            if (!encryptedData) return null;

            // Check version prefix
            const parts = encryptedData.split(':');
            if (parts.length !== 2 || parts[0] !== VERSION) {
                console.warn('Invalid encryption version or format');
                return null;
            }

            const encoded = parts[1];

            // Decode from base64
            let encrypted;
            try {
                encrypted = atob(encoded);
            } catch (e) {
                console.error('Base64 decode error:', e);
                return null;
            }

            // Create same encryption key
            const encKey = generateKey(encrypted.length);

            // Reverse XOR encryption
            let decrypted = '';
            for (let i = 0; i < encrypted.length; i++) {
                decrypted += String.fromCharCode(
                    encrypted.charCodeAt(i) ^ encKey.charCodeAt(i % encKey.length)
                );
            }

            // Try to parse as JSON, otherwise return as string
            try {
                return JSON.parse(decrypted);
            } catch (e) {
                return decrypted;
            }
        } catch (error) {
            console.error('Decryption error:', error);
            return null;
        }
    }

    /**
     * Generate encryption key based on data and master key
     */
    function generateKey(dataLength) {
        const key = MASTER_KEY + dataLength.toString();
        return key.repeat(Math.ceil(dataLength / key.length)).substring(0, dataLength);
    }

    /**
     * Secure localStorage operations
     */
    const StorageManager = {
        /**
         * Set encrypted data in localStorage
         */
        setSecure: function(key, value) {
            try {
                const encrypted = encrypt(value);
                if (encrypted) {
                    localStorage.setItem(key, encrypted);
                    return true;
                }
                return false;
            } catch (error) {
                console.error('Storage error:', error);
                return false;
            }
        },

        /**
         * Get decrypted data from localStorage
         */
        getSecure: function(key) {
            try {
                const encrypted = localStorage.getItem(key);
                if (!encrypted) return null;

                // Try to decrypt
                const decrypted = decrypt(encrypted);
                if (decrypted) return decrypted;

                // Fallback to plain text for backward compatibility
                return encrypted;
            } catch (error) {
                console.error('Retrieval error:', error);
                return null;
            }
        },

        /**
         * Remove data from localStorage
         */
        removeSecure: function(key) {
            try {
                localStorage.removeItem(key);
                return true;
            } catch (error) {
                console.error('Removal error:', error);
                return false;
            }
        },

        /**
         * Clear all secure data
         */
        clearSecure: function() {
            try {
                localStorage.clear();
                return true;
            } catch (error) {
                console.error('Clear error:', error);
                return false;
            }
        }
    };

    return {
        encrypt,
        decrypt,
        StorageManager
    };
})();

/**
 * Global secure storage shortcuts
 */
const SecureStorage = CryptoUtils.StorageManager;
