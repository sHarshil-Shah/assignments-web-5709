import React from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';

interface sucessMailSentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const sucessMailSentModal: React.FC<sucessMailSentModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Your Message has been Mailed to us Successfully!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>Thank you for contacting us. We will get back to you as soon as we can.</p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default sucessMailSentModal;
