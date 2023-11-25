import {
  Avatar,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Tooltip,
  useDisclosure,
} from '@nextui-org/react';

import { UserPreferencesForm } from './UserPreferencesForm.tsx';

export const UserPreferencesModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Tooltip content="Personalizations">
        <Avatar
          isBordered={true}
          as="button"
          color="primary"
          size="sm"
          src="https://i.pravatar.cc/50"
          onClick={onOpen}
        />
      </Tooltip>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Personalization</ModalHeader>

              <ModalBody>
                <UserPreferencesForm onClose={onClose} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
