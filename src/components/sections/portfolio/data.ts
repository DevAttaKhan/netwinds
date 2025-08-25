export const TECHNICAL_CAPABILITIES = [
  {
    id: 1,
    slug: "frontend-development",
    title: "Frontend Development",
    description: "Modern, responsive web applications built with cutting-edge technologies.",
    icon: "Code2",
    color: "from-blue-500 to-cyan-400",

    codeExample: "const App = () => {\n  return <div>Hello World</div>;\n};",
    features: ["Component-based architecture", "State management", "Performance optimization", "Accessibility"],
    detailedDescription: "We specialize in building modern, responsive web applications using the latest frontend technologies. Our approach focuses on creating scalable, maintainable code that delivers exceptional user experiences across all devices.",
    benefits: [
      "Lightning-fast performance with modern frameworks",
      "Responsive design that works on all devices",
      "Accessibility-first approach for inclusive design",
      "SEO-optimized for better search rankings",
      "Scalable architecture for future growth"
    ],
    useCases: [
      "Corporate websites and landing pages",
      "E-commerce platforms and online stores",
      "Web applications and dashboards",
      "Progressive Web Apps (PWAs)",
      "Single Page Applications (SPAs)"
    ],
    codeExamples: [
      {
        title: "React Component with TypeScript",
        description: "Modern component structure with proper typing",
        code: `interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick
}) => {
  return (
    <button
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};`
      },
      {
        title: "Next.js API Route",
        description: "Server-side API endpoint with error handling",
        code: `import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const data = await fetchData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}`
      },
      {
        title: "Custom Hook with Framer Motion",
        description: "Reusable animation hook for smooth transitions",
        code: `import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export const useScrollAnimation = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('target');
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          controls.start('visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return controls;
};`
      }
    ],
    technologies: [
      {
        name: "React 18",
        description: "Latest React with concurrent features and automatic batching",
        features: ["Concurrent rendering", "Automatic batching", "Suspense improvements", "Strict Mode"]
      },
      {
        name: "Next.js 15",
        description: "Full-stack React framework with App Router",
        features: ["App Router", "Server Components", "Built-in optimizations", "API routes"]
      },
      {
        name: "TypeScript",
        description: "Type-safe JavaScript for better development experience",
        features: ["Static typing", "IntelliSense", "Error prevention", "Better refactoring"]
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework for rapid UI development",
        features: ["Utility classes", "Responsive design", "Custom design system", "JIT compilation"]
      },
      {
        name: "Framer Motion",
        description: "Production-ready motion library for React",
        features: ["Declarative animations", "Gesture support", "Layout animations", "Performance optimized"]
      }
    ]
  },
  {
    id: 2,
    slug: "backend-apis",
    title: "Backend & APIs",
    description: "Scalable server-side solutions with robust data management.",
    icon: "Database",
    color: "from-emerald-500 to-green-400",

    codeExample: "app.get('/api/users', (req, res) => {\n  res.json(users);\n});",
    features: ["RESTful APIs", "Database design", "Authentication", "Security"],
    detailedDescription: "We build robust, scalable backend systems that power modern web applications. Our expertise includes API development, database design, authentication systems, and security implementations.",
    benefits: [
      "Scalable architecture for growing applications",
      "Secure authentication and authorization",
      "Optimized database performance",
      "RESTful and GraphQL API design",
      "Comprehensive testing and documentation"
    ],
    useCases: [
      "User management and authentication systems",
      "Data processing and analytics APIs",
      "Real-time communication services",
      "File upload and storage systems",
      "Third-party service integrations"
    ],
    codeExamples: [
      {
        title: "Express.js API with Middleware",
        description: "Structured API with authentication and validation",
        code: `import express from 'express';
import { authenticateToken } from './middleware/auth';
import { validateUser } from './middleware/validation';

const router = express.Router();

router.post('/users',
  authenticateToken,
  validateUser,
  async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
);

export default router;`
      },
      {
        title: "GraphQL Schema Definition",
        description: "Type-safe GraphQL schema with resolvers",
        code: `const typeDefs = gql\`
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    posts: [Post!]!
  }
\`;

const resolvers = {
  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id),
    posts: () => Post.find()
  }
};`
      },
      {
        title: "Database Connection with Pooling",
        description: "Optimized database connection with connection pooling",
        code: `import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export const query = (text, params) => pool.query(text, params);

export default pool;`
      }
    ],
    technologies: [
      {
        name: "Node.js",
        description: "JavaScript runtime for server-side development",
        features: ["Event-driven", "Non-blocking I/O", "NPM ecosystem", "Cross-platform"]
      },
      {
        name: "Express",
        description: "Minimal and flexible Node.js web framework",
        features: ["Routing", "Middleware support", "Template engines", "Static files"]
      },
      {
        name: "PostgreSQL",
        description: "Advanced open-source relational database",
        features: ["ACID compliance", "JSON support", "Full-text search", "Extensions"]
      },
      {
        name: "MongoDB",
        description: "Document-based NoSQL database",
        features: ["Schema flexibility", "Horizontal scaling", "Aggregation pipeline", "GridFS"]
      },
      {
        name: "GraphQL",
        description: "Query language for APIs with strong typing",
        features: ["Single endpoint", "Type system", "Introspection", "Real-time updates"]
      }
    ]
  },
  {
    id: 3,
    slug: "mobile-solutions",
    title: "Mobile Solutions",
    description: "Cross-platform mobile applications and progressive web apps.",
    icon: "Smartphone",
    color: "from-orange-500 to-red-400",

    codeExample: "const MobileApp = () => {\n  return <View><Text>Mobile</Text></View>;\n};",
    features: ["Native performance", "Offline support", "Push notifications", "App store deployment"],
    detailedDescription: "We create cross-platform mobile solutions that deliver native-like performance while maintaining code efficiency. Our mobile apps work seamlessly across iOS and Android with offline capabilities and push notifications.",
    benefits: [
      "Single codebase for multiple platforms",
      "Native performance and user experience",
      "Offline functionality and data sync",
      "Push notifications for user engagement",
      "Easy app store deployment and updates"
    ],
    useCases: [
      "Cross-platform mobile applications",
      "Progressive Web Apps (PWAs)",
      "Hybrid mobile solutions",
      "Mobile-first web applications",
      "Enterprise mobile tools"
    ],
    codeExamples: [
      {
        title: "React Native Component",
        description: "Cross-platform mobile component with navigation",
        code: `import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Our App</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.buttonText}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});`
      },
      {
        title: "PWA Service Worker",
        description: "Service worker for offline functionality and caching",
        code: `const CACHE_NAME = 'app-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});`
      },
      {
        title: "Mobile Navigation Setup",
        description: "React Navigation configuration for mobile apps",
        code: `import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{ title: 'User Profile' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};`
      }
    ],
    technologies: [
      {
        name: "React Native",
        description: "Cross-platform mobile development framework",
        features: ["Native performance", "Hot reloading", "Third-party libraries", "Platform APIs"]
      },
      {
        name: "PWA",
        description: "Progressive Web Apps with native-like features",
        features: ["Offline support", "Push notifications", "App-like experience", "Easy updates"]
      },
      {
        name: "Mobile-first Design",
        description: "Design approach prioritizing mobile experience",
        features: ["Touch-friendly UI", "Responsive layouts", "Performance optimization", "Accessibility"]
      },
      {
        name: "Performance",
        description: "Optimized mobile performance and user experience",
        features: ["Fast loading", "Smooth animations", "Efficient rendering", "Memory management"]
      }
    ]
  },
  {
    id: 4,
    slug: "performance-seo",
    title: "Performance & SEO",
    description: "Lightning-fast websites optimized for search engines and user experience.",
    icon: "Zap",
    color: "from-yellow-500 to-orange-400",

    codeExample: "export const metadata = {\n  title: 'Optimized Page',\n  description: 'Fast & SEO-friendly'\n};",
    features: ["Page speed optimization", "SEO best practices", "Performance monitoring", "User experience"],
    detailedDescription: "We optimize websites for maximum performance and search engine visibility. Our approach focuses on Core Web Vitals, SEO best practices, and creating exceptional user experiences that convert visitors into customers.",
    benefits: [
      "Faster page load times for better UX",
      "Improved search engine rankings",
      "Better user engagement and conversion",
      "Reduced bounce rates and increased retention",
      "Competitive advantage in search results"
    ],
    useCases: [
      "Website performance optimization",
      "SEO strategy and implementation",
      "Core Web Vitals improvement",
      "Content optimization and keyword targeting",
      "Technical SEO audits and fixes"
    ],
    codeExamples: [
      {
        title: "Next.js Metadata API",
        description: "Dynamic metadata for better SEO",
        code: `export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPost(params.slug);
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
    },
  };
}`
      },
      {
        title: "Image Optimization Component",
        description: "Next.js Image component with optimization",
        code: `import Image from 'next/image';

const OptimizedImage = ({ src, alt, width, height }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      priority={true}
      className="rounded-lg"
    />
  );
};`
      },
      {
        title: "Performance Monitoring",
        description: "Web Vitals monitoring and reporting",
        code: `import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  const body = JSON.stringify(metric);
  const url = '/analytics';

  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body);
  } else {
    fetch(url, { body, method: 'POST', keepalive: true });
  }
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);`
      }
    ],
    technologies: [
      {
        name: "Core Web Vitals",
        description: "Google's metrics for measuring user experience",
        features: ["LCP", "FID", "CLS", "Performance monitoring", "User experience"]
      },
      {
        name: "Lighthouse",
        description: "Google's automated tool for improving web page quality",
        features: ["Performance audits", "Accessibility checks", "Best practices", "SEO analysis"]
      },
      {
        name: "SEO",
        description: "Search Engine Optimization for better visibility",
        features: ["Keyword optimization", "Technical SEO", "Content strategy", "Link building"]
      },
      {
        name: "CDN",
        description: "Content Delivery Network for faster loading",
        features: ["Global distribution", "Caching", "Compression", "DDoS protection"]
      },
      {
        name: "Caching",
        description: "Strategic caching for improved performance",
        features: ["Browser caching", "Server caching", "CDN caching", "Application caching"]
      }
    ]
  },
  {
    id: 5,
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    description: "Reliable deployment and hosting with continuous integration.",
    icon: "Cloud",
    color: "from-purple-500 to-pink-400",

    codeExample: "version: '3.8'\nservices:\n  web:\n    build: .\n    ports:\n      - '3000:3000'",
    features: ["Cloud deployment", "Automated testing", "Continuous deployment", "Monitoring & alerts"],
    detailedDescription: "We implement modern DevOps practices and cloud infrastructure solutions that ensure reliable, scalable, and secure deployments. Our approach includes automated testing, continuous integration, and comprehensive monitoring.",
    benefits: [
      "Automated deployment and testing processes",
      "Scalable cloud infrastructure",
      "Reduced deployment risks and downtime",
      "Better resource utilization and cost optimization",
      "Improved security and compliance"
    ],
    useCases: [
      "Cloud infrastructure setup and management",
      "CI/CD pipeline implementation",
      "Container orchestration and deployment",
      "Monitoring and alerting systems",
      "Security and compliance implementation"
    ],
    codeExamples: [
      {
        title: "Docker Compose Configuration",
        description: "Multi-service application with Docker",
        code: `version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:pass@db:5432/app
    depends_on:
      - db
    volumes:
      - ./uploads:/app/uploads

  db:
    image: postgres:13
    environment:
      - POSTGRES_DB=app
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:`
      },
      {
        title: "GitHub Actions Workflow",
        description: "Automated CI/CD pipeline",
        code: `name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test
      - run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.ORG_ID }}
          vercel-project-id: \${{ secrets.PROJECT_ID }}`
      },
      {
        title: "AWS Infrastructure as Code",
        description: "Terraform configuration for AWS resources",
        code: `resource "aws_s3_bucket" "website" {
  bucket = "my-website-bucket"
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}

resource "aws_cloudfront_distribution" "website" {
  origin {
    domain_name = aws_s3_bucket.website.bucket_regional_domain_name
    origin_id   = "S3-Website"
  }

  enabled             = true
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-Website"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }
}`
      }
    ],
    technologies: [
      {
        name: "AWS",
        description: "Amazon Web Services cloud platform",
        features: ["EC2", "S3", "RDS", "Lambda", "CloudFront"]
      },
      {
        name: "Vercel",
        description: "Deployment platform for frontend applications",
        features: ["Zero config", "Automatic deployments", "Edge functions", "Analytics"]
      },
      {
        name: "Docker",
        description: "Containerization platform for applications",
        features: ["Containerization", "Portability", "Isolation", "Scalability"]
      },
      {
        name: "CI/CD",
        description: "Continuous Integration and Continuous Deployment",
        features: ["Automated testing", "Automated deployment", "Version control", "Quality gates"]
      },
      {
        name: "Monitoring",
        description: "Application and infrastructure monitoring",
        features: ["Performance metrics", "Error tracking", "Alerting", "Logging"]
      }
    ]
  }
];

export const getCapabilityBySlug = (slug: string) => {
  return TECHNICAL_CAPABILITIES.find(capability => capability.slug === slug);
};

export const getAllCapabilitySlugs = () => {
  return TECHNICAL_CAPABILITIES.map(capability => capability.slug);
};
