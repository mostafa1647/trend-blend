import {
  Avatar,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  SelectProps,
  Skeleton,
  Textarea,
  Tooltip,
  useDisclosure,
} from '@nextui-org/react';
import { Control, Controller, FieldPath, useForm } from 'react-hook-form';
import { useLocalStorage } from 'usehooks-ts';

import { sourcesApiGateway } from '../../api/sources/sources-api-gateway.ts';
import { UserPreferences } from '../../types/general-types.ts';
import {
  NewsapiCategory,
  NewsapiCategoryType,
} from '../../types/newsapi-types.ts';
import { localStorageKeys } from '../../utils/constants.ts';
import { getUserPreferences } from '../../utils/user-preferences.ts';

interface PersonalizationFormSchema {
  sources?: Set<string>;
  categories?: Set<NewsapiCategoryType>;
  authors?: string;
}

interface ControlledSelectProps {
  control: Control;
  name: FieldPath<PersonalizationFormSchema>;
  label: string;
  placeholder?: string;
  children: SelectProps['children'];
}

/**
 * This component is for simplicity of PersonalizationModal.
 *
 * Reason that it's in this file is that it should not ba importable in other components.
 */
const ControlledSelect = ({
  control,
  name,
  label,
  placeholder,
  children,
}: ControlledSelectProps) => (
  <Controller<PersonalizationFormSchema>
    name={name}
    control={control}
    render={({ field }) => (
      <Select
        size="sm"
        label={label}
        variant="bordered"
        selectionMode="multiple"
        placeholder={placeholder}
        name={field.name}
        selectedKeys={field.value as PersonalizationFormSchema['sources']}
        onSelectionChange={field.onChange}
      >
        {children}
      </Select>
    )}
  />
);

export const PersonalizationModal = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const [userPreferences, setUserPreferences] =
    useLocalStorage<UserPreferences | null>(
      localStorageKeys.USER_PREFERENCES_LS_KEY,
      getUserPreferences(),
    );

  const form = useForm<PersonalizationFormSchema>({
    mode: 'onSubmit',
    defaultValues: {
      sources: new Set(userPreferences?.sources || []),
      categories: new Set(userPreferences?.categories || []),
      authors: userPreferences?.authors?.join(', ') || '',
    },
  });

  const formSubmitHandler = (values: PersonalizationFormSchema) => {
    setUserPreferences({
      ...(values.sources?.size &&
        values.sources?.size > 0 && { sources: [...values.sources] }),
      ...(values.categories?.size &&
        values.categories?.size > 0 && { categories: [...values.categories] }),
      ...(values.authors && {
        authors: values.authors
          .trim()
          .split(',')
          .map((s) => s.trim()),
      }),
    });

    onClose();
  };

  const resetPersonalizationHandler = () => {
    formSubmitHandler({
      sources: new Set([]),
      categories: new Set([]),
      authors: '',
    });
  };

  const {
    data: sourcesData,
    isError: sourcesIsError,
    isLoading: sourcesIsLoading,
  } = sourcesApiGateway.useGetSources();

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

              <form onSubmit={form.handleSubmit(formSubmitHandler)}>
                <ModalBody>
                  {sourcesIsLoading ? (
                    <Skeleton className="rounded-lg">
                      <div className="h-12 rounded-lg bg-default-300"></div>
                    </Skeleton>
                  ) : sourcesIsError ? (
                    <p className="text-danger">
                      Something went wrong while loading sources
                    </p>
                  ) : sourcesData ? (
                    <ControlledSelect
                      control={form.control}
                      name="sources"
                      label="Sources"
                      placeholder="Select your preferred sources"
                    >
                      {sourcesData.data.sources.map((source) => (
                        <SelectItem key={source.id} value={source.id}>
                          {source.name}
                        </SelectItem>
                      ))}
                    </ControlledSelect>
                  ) : null}

                  <ControlledSelect
                    control={form.control}
                    name="categories"
                    label="Categories"
                    placeholder="Select your preferred categories"
                  >
                    {Object.values(NewsapiCategory).map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </ControlledSelect>

                  <Controller
                    control={form.control}
                    name="authors"
                    render={({ field }) => (
                      <Textarea
                        variant="bordered"
                        label="Authors"
                        placeholder="Brian Evans, USA Today"
                        description="Enter your preferred authors (comma separated)"
                        value={field.value}
                        onValueChange={field.onChange}
                      />
                    )}
                  />
                </ModalBody>

                <ModalFooter>
                  <div className="flex flex-1 flex-col justify-between gap-2 sm:flex-row">
                    <div className="flex flex-1">
                      <Button
                        className="w-full sm:w-auto"
                        color="danger"
                        onClick={resetPersonalizationHandler}
                      >
                        Reset Personalization
                      </Button>
                    </div>
                    <div className="flex flex-1 gap-2">
                      <Button
                        className="flex-1"
                        onClick={() => {
                          form.reset();
                          onClose();
                        }}
                      >
                        Cancel
                      </Button>
                      <Button className="flex-1" type="submit" color="primary">
                        Submit
                      </Button>
                    </div>
                  </div>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
