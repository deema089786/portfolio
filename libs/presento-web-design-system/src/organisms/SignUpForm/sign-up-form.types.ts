export type SignUpFormProps = {
  google?: {
    enabled: boolean;
    clientId: string;
    onSuccess?: (params: { token: string }) => void;
    onError?: () => void;
  };
};
