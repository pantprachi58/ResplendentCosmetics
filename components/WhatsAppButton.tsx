import React from 'react';
import styles from './WhatsAppButton.module.css';

const WhatsAppButton = () => {
  const phoneNumber = '919876543210'; // Replace with actual WhatsApp number
  const message = 'Hello! I would like to book a consultation.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
      aria-label="Chat on WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        className={styles.icon}
      >
        <path d="M16 0C7.164 0 0 7.164 0 16c0 2.824.738 5.488 2.032 7.812L0 32l8.376-2.032A15.948 15.948 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.344c-2.488 0-4.876-.688-6.944-1.968l-.496-.296-5.152 1.248 1.28-4.952-.328-.52A13.276 13.276 0 012.656 16c0-7.352 5.992-13.344 13.344-13.344S29.344 8.648 29.344 16 23.352 29.344 16 29.344z"/>
        <path d="M23.152 19.52c-.4-.2-2.368-1.168-2.736-1.304-.368-.128-.632-.2-.904.2-.264.4-1.04 1.304-1.272 1.576-.232.264-.472.296-.872.096-.4-.2-1.688-.624-3.216-1.984-1.192-1.064-1.992-2.376-2.224-2.776-.232-.4-.024-.616.176-.816.176-.184.4-.472.6-.712.2-.232.264-.4.4-.664.136-.264.072-.496-.032-.696-.104-.2-.904-2.176-1.24-2.984-.328-.784-.664-.68-.904-.688-.232-.008-.496-.016-.76-.016s-.696.096-1.064.496c-.368.4-1.4 1.368-1.4 3.336s1.432 3.864 1.632 4.128c.2.272 2.816 4.296 6.824 6.024.952.416 1.696.664 2.272.848.952.304 1.824.264 2.512.16.768-.112 2.368-.968 2.704-1.904.336-.936.336-1.736.232-1.904-.096-.168-.36-.264-.76-.464z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
