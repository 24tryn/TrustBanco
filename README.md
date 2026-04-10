# TrustBanco - Secure Banking Application

A modern, responsive banking application built with HTML5, CSS (Tailwind), and Vanilla JavaScript. Features PIN-based authentication, encrypted data storage, money transfers, and account management.

## 🎯 Features

### Authentication & Security
- ✅ **PIN-Based Login** - 6-digit PIN authentication
- ✅ **Account Creation** - Multi-step signup with validation
- ✅ **Data Encryption** - XOR-based encryption for sensitive data (localStorage)
- ✅ **Session Management** - 30-minute inactivity timeout
- ✅ **PIN Recovery** - 3-step recovery process with security questions
- ✅ **Secure Password Change** - Change PIN through security settings

### Account Management
- ✅ **Account Settings** - Update profile information (name, email, phone, address)
- ✅ **Security Settings** - Change PIN with verification
- ✅ **User Dashboard** - Display balance and recent activity
- ✅ **Dynamic Username** - Welcome message updates with user's first name

### Money Transfers
- ✅ **Send Money** - Transfer funds to recipients with confirmation
- ✅ **Real-Time Balance** - Deducts amount from balance on transfer
- ✅ **Transaction History** - View all transfers in Recent Activity section
- ✅ **Transfer Validation** - Checks for sufficient balance and valid amounts
- ✅ **Transaction Confirmation** - Modal-based approval system

### User Interface
- ✅ **Blue Theme Design** - Professional color palette
- ✅ **Responsive Layout** - Mobile-friendly design
- ✅ **Error Notifications** - Toast notifications for user feedback
- ✅ **Form Validation** - Real-time input validation with error messages
- ✅ **Glass Morphism** - Modern UI effects with backdrop filters

### Legal & Support
- ✅ **Privacy Policy** - Complete privacy documentation
- ✅ **Terms of Service** - Legal T&S document
- ✅ **Help Center** - FAQ section with contact options
- ✅ **404 Error Page** - Custom error page handling

## 📁 File Structure

```
TrustBanco/
├── index.html                 # Sign-in entry point
├── signup.html               # Account creation (3-step form)
├── signin.html               # PIN entry screen
├── dashboard.html            # Main dashboard with balance & transactions
├── transfers.html            # Money transfer interface
├── forgot-pin.html           # PIN recovery flow
├── account-settings.html     # User profile settings
├── privacy-policy.html       # Privacy policy
├── terms-of-service.html     # Terms of service
├── support.html              # Help center & FAQ
├── 404.html                  # Error page
└── crypto-utils.js           # Encryption utility
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No backend required (client-side only)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/24tryn/TrustBanco.git
   cd TrustBanco
   ```

2. **Open in browser**
   - Option 1: Double-click `index.html`
   - Option 2: Use a local server:
     ```bash
     python -m http.server 8000
     # Then visit http://localhost:8000
     ```

3. **Create an account**
   - Click "Create Account" on the sign-in page
   - Fill in personal information (3 steps)
   - Set a 6-digit PIN
   - Answer security questions

4. **Log in**
   - Enter your 6-digit PIN
   - Access dashboard and all features

## 📊 Usage Guide

### Sign Up
1. Click "Create Account"
2. **Step 1:** Enter full name, email, phone, age
3. **Step 2:** Enter address details
4. **Step 3:** Set 6-digit PIN & answer security questions
5. Click "Complete Setup"

### Account Settings
1. Click the profile icon (top-right)
2. Click "Account Settings"
3. Update your information
4. Click "Save Changes"

### Change PIN
1. Click the profile icon (top-right)
2. Click "Security"
3. Enter current PIN
4. Enter new 6-digit PIN (twice)
5. Click "Change PIN"

### Send Money
1. Go to **Transfers & Payments** tab
2. Choose a recent recipient or enter a new name
3. Enter amount (up to $999,999.99)
4. Add optional notes
5. Click "Send Money"
6. Review in confirmation modal
7. Click "Approve Transaction"
8. View updated balance and transaction history

### View Transactions
- Transactions appear in "Recent Activity" on dashboard
- Shows recipient, amount, and date
- Most recent transfers appear first

## 💾 Data Storage

### Encrypted Storage
All sensitive data is encrypted using XOR-based encryption:
- User credentials (name, email, phone, address)
- PIN codes
- Transaction history
- Balance information

### localStorage Keys
```javascript
trustBancoUser        // User profile and balance
trustBancoPin         // Encrypted PIN
trustBancoTransfers   // Transaction history
```

### Data Format
All data is prefixed with version identifier:
```
"1:base64_encoded_encrypted_data"
```

## 🔒 Security Features

- **Client-Side Encryption** - Data encrypted before storing in browser
- **Session Timeout** - Auto-logout after 30 minutes of inactivity
- **PIN Validation** - 6-digit PIN required for authentication
- **Balance Verification** - Prevents transfers exceeding available balance
- **Input Validation** - All forms validated before submission
- **HTTPS Ready** - Can be deployed with SSL/TLS for production

⚠️ **Note:** This is a demo application. For production:
- Use a dedicated backend API
- Implement server-side encryption
- Use HTTPS/TLS
- Use proper database (PostgreSQL, MongoDB)
- Integrate with real payment gateways

## 🎨 Technology Stack

- **Frontend:** HTML5, CSS3 (Tailwind CSS), Vanilla JavaScript
- **Styling:** Tailwind CSS with custom Material Design color system
- **Icons:** Material Symbols Outlined
- **Storage:** Browser localStorage (client-side)
- **Encryption:** XOR-based encryption with Base64 encoding
- **No Framework:** Pure vanilla JavaScript (no React, Vue, etc.)

## 🌐 Color Theme

| Element | Color | Hex |
|---------|-------|-----|
| Primary | Blue | `#1e40af` |
| Secondary | Cyan | `#0ea5e9` |
| Tertiary | Turquoise | `#06b6d4` |
| Error | Red | `#9f403d` |
| Success | Green (Primary variant) | - |

## 📱 Responsive Design

- ✅ Mobile-first approach
- ✅ Tablet optimization
- ✅ Desktop-friendly layout
- ✅ Tailwind CSS breakpoints (sm, md, lg)
- ✅ Flexible sidebars and modals

## 🔄 Form Validation

### Signup Form
- Email: Valid RFC 5322 format
- Phone: US/International format
- Name: 2+ words
- Age: 18 or older
- ZIP: 5-digit or ZIP+4 format
- Security Answer: Minimum 3 characters

### Transfer Form
- Recipient: Minimum 3 characters
- Amount: 0.01 - $999,999.99
- No transfers exceeding available balance

## 🚧 Future Enhancements (Backend)

- **Node.js/Express API** - RESTful backend
- **Database** - PostgreSQL or MongoDB
- **Authentication** - JWT tokens, OAuth
- **Payment Gateway** - Stripe, Plaid integration
- **Real Transfers** - Actual money movement
- **Admin Dashboard** - Support & monitoring
- **Email Notifications** - Transaction confirmations
- **Multi-Device Sync** - Cloud data synchronization

## 📖 API Ready Structure

The frontend is designed to easily connect to a backend API:
- Encryption utilities can be moved to backend
- Transfer validation can be server-side
- Balance updates can sync with database
- Session management can use JWT tokens

## 🤝 Contributing

Contributions welcome! Areas for improvement:
- Backend API integration
- Enhanced encryption (AES-256)
- Mobile app version
- Additional payment methods
- Real-time notifications

## 📄 License

MIT License - Free to use and modify

## 👤 Author

**24tryn** - TrustBanco Banking Application

## 📞 Support

For issues or questions:
1. Check the Help Center (support.html)
2. Review Privacy Policy & Terms of Service
3. Create an issue on GitHub

## 🗺️ Roadmap

- [ ] Node.js backend API
- [ ] PostgreSQL database
- [ ] JWT authentication
- [ ] Real payment processing
- [ ] Mobile app (React Native)
- [ ] Two-factor authentication
- [ ] Biometric login
- [ ] Recurring transfers
- [ ] Bill payments
- [ ] Investment portfolio tracking

---

**Version:** 1.0.0  
**Last Updated:** April 10, 2026  
**Status:** Active Development
