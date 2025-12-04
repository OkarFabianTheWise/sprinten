"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer 
      className="relative"
      style={{
        width: '1440px',
        height: '384px',
        backgroundColor: '#021514'
      }}
    >
      {/* Main footer content */}
      <div 
        className="absolute flex justify-between"
        style={{
          width: '1320px',
          height: '148px',
          top: '80px',
          left: '60px'
        }}
      >
        {/* Left side - Logo and tagline */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.img 
            src="/logo.png" 
            alt="Sprinten" 
            style={{
              width: '175.35px',
              height: '90px',
              marginBottom: '16px'
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
          />
          <motion.p 
            style={{
              fontSize: '16px',
              color: '#8B9FFF',
              marginTop: '12px'
            }}
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Ship Faster. Build Better. Onchain.
          </motion.p>
        </motion.div>
        {/* Quick link */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h3 
            style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#FFFFFF',
              marginBottom: '16px'
            }}
          >
            Quick link
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <motion.li 
              style={{ marginBottom: '12px' }}
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <a 
                href="#home" 
                style={{ 
                  fontSize: '14px', 
                  color: '#8B9FFF',
                  textDecoration: 'none'
                }}
                className="hover:text-white transition-colors"
              >
                Home
              </a>
            </motion.li>
            <motion.li 
              style={{ marginBottom: '12px' }}
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <a 
                href="#services" 
                style={{ 
                  fontSize: '14px', 
                  color: '#8B9FFF',
                  textDecoration: 'none'
                }}
                className="hover:text-white transition-colors"
              >
                Services
              </a>
            </motion.li>
            <motion.li 
              style={{ marginBottom: '12px' }}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a 
                href="#work" 
                style={{ 
                  fontSize: '14px', 
                  color: '#8B9FFF',
                  textDecoration: 'none'
                }}
                className="hover:text-white transition-colors"
              >
                Work
              </a>
            </motion.li>
            <motion.li
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <a 
                href="#contact" 
                style={{ 
                  fontSize: '14px', 
                  color: '#8B9FFF',
                  textDecoration: 'none'
                }}
                className="hover:text-white transition-colors"
              >
                Contact
              </a>
            </motion.li>
          </ul>
        </motion.div>
        {/* Connect */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h3 
            style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#FFFFFF',
              marginBottom: '16px'
            }}
          >
            Connect
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <motion.li 
              style={{ marginBottom: '12px' }}
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <a 
                href="https://twitter.com" 
                style={{ 
                  fontSize: '14px', 
                  color: '#8B9FFF',
                  textDecoration: 'none'
                }}
                className="hover:text-white transition-colors"
              >
                Twitter
              </a>
            </motion.li>
            <motion.li 
              style={{ marginBottom: '12px' }}
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <a 
                href="https://linkedin.com" 
                style={{ 
                  fontSize: '14px', 
                  color: '#8B9FFF',
                  textDecoration: 'none'
                }}
                className="hover:text-white transition-colors"
              >
                Linkidin
              </a>
            </motion.li>
            <motion.li 
              style={{ marginBottom: '12px' }}
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <a 
                href="https://instagram.com" 
                style={{ 
                  fontSize: '14px', 
                  color: '#8B9FFF',
                  textDecoration: 'none'
                }}
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
            </motion.li>
            <motion.li
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <a 
                href="mailto:contact@sprinten.com" 
                style={{ 
                  fontSize: '14px', 
                  color: '#8B9FFF',
                  textDecoration: 'none'
                }}
                className="hover:text-white transition-colors"
              >
                Email
              </a>
            </motion.li>
          </ul>
        </motion.div>
        {/* Legal */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h3 
            style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#FFFFFF',
              marginBottom: '16px'
            }}
          >
            Legal
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <motion.li 
              style={{ marginBottom: '12px' }}
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <a 
                href="#terms" 
                style={{ 
                  fontSize: '14px', 
                  color: '#8B9FFF',
                  textDecoration: 'none'
                }}
                className="hover:text-white transition-colors"
              >
                Terms
              </a>
            </motion.li>
            <motion.li 
              style={{ marginBottom: '12px' }}
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <a 
                href="#privacy" 
                style={{ 
                  fontSize: '14px', 
                  color: '#8B9FFF',
                  textDecoration: 'none'
                }}
                className="hover:text-white transition-colors"
              >
                Privacy
              </a>
            </motion.li>
            <motion.li 
              style={{ marginBottom: '12px' }}
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <a 
                href="#work" 
                style={{ 
                  fontSize: '14px', 
                  color: '#8B9FFF',
                  textDecoration: 'none'
                }}
                className="hover:text-white transition-colors"
              >
                Work
              </a>
            </motion.li>
            <motion.li
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <a 
                href="#contact" 
                style={{ 
                  fontSize: '14px', 
                  color: '#8B9FFF',
                  textDecoration: 'none'
                }}
                className="hover:text-white transition-colors"
              >
                Contact
              </a>
            </motion.li>
          </ul>
        </motion.div>
      </div>
      {/* Bottom copyright with divider */}
      <motion.div 
        className="absolute"
        style={{
          bottom: '40px',
          left: '60px',
          right: '60px'
        }}
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <div 
          style={{
            width: '100%',
            height: '1px',
            backgroundColor: '#8B9FFF',
            opacity: 0.2,
            marginBottom: '24px'
          }}
        />
        <p 
          style={{
            fontSize: '14px',
            color: '#8B9FFF',
            textAlign: 'center'
          }}
        >
          © 2025 Sprinten- All right reserved
        </p>
      </motion.div>
    </footer>
  );
}
