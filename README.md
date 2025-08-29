# 🌟 Seva Foundation NGO Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)

A modern, inspiring, and emotionally powerful NGO website for Seva Foundation - an organization dedicated to holistic development in India through education, women empowerment, spiritual growth, and environmental sustainability.

## 🎯 Overview

Seva Foundation's website embodies the organization's mission to create lasting positive change through comprehensive programs addressing India's most pressing social challenges. Built with modern web technologies and designed with cultural sensitivity, this platform serves as a bridge between donors, volunteers, and communities in need.

### 🌈 Core Values

- **Seva** (Service) - Selfless service to humanity
- **Satya** (Truth) - Transparency in all operations  
- **Shiksha** (Education) - Knowledge as the foundation of progress
- **Samaan** (Equality) - Equal opportunities for all
- **Shraddha** (Faith) - Unwavering belief in positive change
- **Sahbhagita** (Participation) - Community involvement
- **Parivartan** (Change) - Sustainable transformation
- **Jal-Vayu-Mati** (Water-Air-Earth) - Environmental consciousness

## ✨ Features

### 🎨 Visual Design
- **Indian Cultural Integration**: Sanskrit values, traditional colors, cultural sensitivity
- **Modern Aesthetic**: Clean, minimal design with warm, human touch
- **Responsive Design**: Perfect experience on mobile, tablet, and desktop
- **Custom Color Palette**: 
  - Primary Green: `#22c55e` (Growth & Hope)
  - Saffron Orange: `#f59e0b` (Energy & Spirituality) 
  - Accent Blue: `#3b82f6` (Trust & Stability)
- **Smooth Animations**: Hover effects, micro-interactions, fade-ins
- **Accessibility**: WCAG 2.1 compliant, screen reader friendly

### 🏛️ Website Structure

#### 🏠 Home Page
- **Hero Section**: Powerful messaging with emotional imagery
- **Four Pillars**: Education, Women Empowerment, Spirituality, Environment
- **Impact Statistics**: Real-time progress indicators
- **Testimonials**: Stories from beneficiaries
- **Mission Statement**: Clear organizational purpose

#### ℹ️ About Us
- **Foundation Story**: Origin and evolution since 2015
- **Mission & Vision**: Clear statements of purpose
- **Core Values**: Sanskrit-rooted principles
- **Team Information**: Leadership and key personnel

#### 🎯 Our Work  
- **Education Programs**: After-school learning, scholarships, teacher training
- **Women Empowerment**: Skills training, microfinance, leadership development
- **Spiritual Growth**: Vedanta workshops, meditation, yoga programs
- **Environmental Initiatives**: Tree plantation, plastic-free campaigns

#### 🤝 Get Involved
- **Donation System**: 
  - Quick amounts (₹500, ₹2,000, ₹5,000)
  - Custom amount input
  - Monthly recurring options
  - Mock Razorpay integration
  - 80G tax exemption compliance
- **Volunteer Registration**:
  - Area of interest selection
  - Skills assessment
  - Availability tracking
  - Background verification

#### 📰 Stories & Updates
- **Impact Stories**: Success stories with photos
- **Program Updates**: Latest activities and milestones
- **Blog Content**: Educational and inspirational articles
- **Media Coverage**: Press releases and news features

#### 📞 Contact Us
- **Contact Form**: Multi-subject categorization
- **Office Information**: Address, phone, email
- **Social Media**: Links to all platforms
- **Office Hours**: Availability information

### 🛠️ Technical Features

#### Frontend Technologies
```
├── React 18.x (TypeScript)
├── Wouter (Routing)
├── Tailwind CSS (Styling)
├── Shadcn/UI (Components)
├── React Hook Form (Form Management)
├── Zod (Validation)
├── TanStack Query (State Management)
├── Lucide React (Icons)
└── Framer Motion (Animations)
```

#### Backend Technologies
```
├── Express.js (TypeScript)
├── Drizzle ORM (Database)
├── Zod (Runtime Validation)
├── In-Memory Storage (Development)
└── PostgreSQL Ready (Production)
```

#### Development Tools
```
├── Vite (Build Tool)
├── TypeScript (Type Safety)
├── ESLint (Code Quality)
├── Prettier (Code Formatting)
└── Git (Version Control)
```

## 🚀 Quick Start

### Prerequisites
- Node.js 20.x or higher
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd seva-foundation-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Access the application**
- Frontend: `http://localhost:5000`
- API: `http://localhost:5000/api`

## 📁 Project Structure

```
seva-foundation/
├── client/                    # Frontend application
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── ui/           # Shadcn/UI components
│   │   │   ├── hero-section.tsx
│   │   │   ├── pillars-section.tsx
│   │   │   ├── testimonials.tsx
│   │   │   ├── navigation.tsx
│   │   │   ├── footer.tsx
│   │   │   └── floating-ctas.tsx
│   │   ├── pages/            # Page components
│   │   │   ├── home.tsx
│   │   │   ├── about.tsx
│   │   │   ├── our-work.tsx
│   │   │   ├── get-involved.tsx
│   │   │   ├── stories.tsx
│   │   │   └── contact.tsx
│   │   ├── hooks/            # Custom React hooks
│   │   ├── lib/              # Utility libraries
│   │   │   ├── queryClient.ts
│   │   │   └── utils.ts
│   │   ├── App.tsx           # Main application component
│   │   ├── index.css         # Global styles
│   │   └── main.tsx          # Application entry point
│   └── index.html            # HTML template
├── server/                   # Backend application
│   ├── index.ts             # Server entry point
│   ├── routes.ts            # API routes
│   ├── storage.ts           # Data storage layer
│   └── vite.ts              # Vite integration
├── shared/                   # Shared type definitions
│   └── schema.ts            # Database schemas & types
├── attached_assets/          # Generated images & assets
│   └── generated_images/    # AI-generated custom images
├── package.json             # Dependencies & scripts
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── README.md               # Project documentation
```

## 🎨 Custom Images

The website features AI-generated custom images specifically created for Seva Foundation:

- **Hero Background**: Community activities panorama
- **Education**: Children in classroom learning
- **Women Empowerment**: Skills training workshop
- **Spirituality**: Meditation and yoga sessions  
- **Environment**: Tree plantation drives

All images are stored in `attached_assets/generated_images/` and optimized for web performance.

## 🔧 Configuration

### Environment Variables
Create `.env` file in the root directory:

```env
# Database Configuration (Production)
DATABASE_URL=postgresql://username:password@localhost:5432/seva_foundation

# Email Configuration (Optional)
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASS=your-password

# Payment Gateway (Production)
RAZORPAY_KEY_ID=your-razorpay-key
RAZORPAY_KEY_SECRET=your-razorpay-secret
```

### Database Setup (Production)

1. **Install PostgreSQL**
2. **Create database**
```sql
CREATE DATABASE seva_foundation;
```

3. **Run migrations**
```bash
npm run db:generate
npm run db:migrate
```

### Email Configuration
Update `server/routes.ts` to integrate email services:
- Welcome emails for newsletter subscribers
- Donation confirmations
- Volunteer application notifications

## 🚀 Deployment

### Replit Deployment (Recommended)
1. **Import project** to Replit
2. **Install dependencies** automatically
3. **Configure environment variables**
4. **Deploy** with one click

### Manual Deployment

1. **Build for production**
```bash
npm run build
```

2. **Serve static files**
```bash
npm run preview
```

3. **Configure reverse proxy** (Nginx/Apache)
4. **Set up SSL certificate**
5. **Configure domain** and DNS

### Environment-Specific Configurations

#### Development
- In-memory storage
- Hot reload enabled
- Debug logging
- Mock payment gateway

#### Production  
- PostgreSQL database
- Optimized builds
- Error logging
- Real payment integration

## 🔐 Security Considerations

### Data Protection
- **Form Validation**: Client and server-side validation
- **Input Sanitization**: XSS prevention
- **CSRF Protection**: Cross-site request forgery prevention
- **Rate Limiting**: API endpoint protection

### Privacy Compliance
- **Data Minimization**: Collect only necessary information
- **Consent Management**: Clear privacy policies
- **Right to Deletion**: User data removal capabilities
- **Secure Storage**: Encrypted sensitive data

## 📊 Analytics & Monitoring

### Recommended Tools
- **Google Analytics**: User behavior tracking
- **Hotjar**: Heatmaps and user sessions
- **Sentry**: Error monitoring and reporting
- **Uptime Robot**: Server monitoring

### Key Metrics to Track
- **Donation Conversion Rate**: Visitors to donors ratio
- **Volunteer Applications**: Monthly application counts
- **Page Engagement**: Time spent on key pages
- **Mobile Usage**: Device-specific analytics

## 🤝 Contributing

### Development Workflow
1. **Fork the repository**
2. **Create feature branch**
```bash
git checkout -b feature/your-feature-name
```
3. **Make changes** and test thoroughly
4. **Commit with descriptive messages**
```bash
git commit -m "feat: add newsletter subscription validation"
```
5. **Submit pull request** with detailed description

### Code Standards
- **TypeScript**: Strict type checking enabled
- **ESLint**: Airbnb configuration
- **Prettier**: Consistent code formatting
- **Conventional Commits**: Semantic commit messages

### Testing Guidelines
- **Unit Tests**: Component and utility functions
- **Integration Tests**: API endpoints and forms
- **E2E Tests**: Critical user journeys
- **Accessibility Tests**: WCAG compliance

## 📞 Support & Maintenance

### Getting Help
- **GitHub Issues**: Bug reports and feature requests
- **Documentation**: Comprehensive guides and FAQs
- **Community**: Developer community support

### Regular Maintenance
- **Security Updates**: Monthly dependency updates
- **Performance Monitoring**: Page speed optimization
- **Content Updates**: Regular story and impact updates
- **Backup Strategy**: Automated daily backups

## 📋 API Documentation

### Endpoints

#### Contact Form
```
POST /api/contacts
{
  "firstName": "string",
  "lastName": "string", 
  "email": "string",
  "subject": "string",
  "message": "string"
}
```

#### Volunteer Registration
```
POST /api/volunteers
{
  "fullName": "string",
  "email": "string",
  "phone": "string",
  "areaOfInterest": "string",
  "skills": "string"
}
```

#### Donation Processing
```
POST /api/donations
{
  "amount": number,
  "isMonthly": boolean,
  "donorName": "string",
  "donorEmail": "string"
}
```

#### Newsletter Subscription
```
POST /api/newsletter
{
  "email": "string"
}
```

## 🎯 Future Enhancements

### Phase 1 (Next 3 months)
- [ ] **Multi-language Support**: Full Hindi translation
- [ ] **Payment Gateway Integration**: Live Razorpay implementation  
- [ ] **Admin Dashboard**: Content management system
- [ ] **Email Automation**: Welcome and confirmation emails

### Phase 2 (Next 6 months)
- [ ] **Mobile App**: React Native companion app
- [ ] **Volunteer Portal**: Dedicated volunteer dashboard
- [ ] **Impact Tracking**: Real-time program metrics
- [ ] **Social Integration**: Share and social login features

### Phase 3 (Next 12 months)
- [ ] **AI Chatbot**: 24/7 visitor assistance
- [ ] **Advanced Analytics**: Predictive donation insights
- [ ] **CRM Integration**: Donor relationship management
- [ ] **Blockchain Transparency**: Donation tracking on blockchain

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

### Design Inspiration
- **Material Design**: Google's design system principles
- **Indian Cultural Elements**: Traditional patterns and colors
- **Nonprofit Best Practices**: Industry-leading NGO websites

### Technical References
- **React Documentation**: Component architecture patterns
- **Tailwind CSS**: Utility-first styling approach
- **Accessibility Guidelines**: WCAG 2.1 compliance standards

### Community Contributors
- **Open Source Libraries**: Countless developers' contributions
- **Beta Testers**: Community feedback and suggestions
- **Content Contributors**: Story writers and photographers

---

## 📞 Contact Information

**Development Team**: [Your contact information]
**Organization**: Seva Foundation
**Email**: info@sevafoundation.org
**Website**: [Your deployed URL]

---

*Built with ❤️ for social impact and community development.*