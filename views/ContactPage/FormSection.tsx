import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from 'components/Button';
import Input from 'components/Input';
import ReCAPTCHA from 'react-google-recaptcha';
import { media } from 'utils/media';
import MailSentState from '../../components/MailSentState';
import { useTranslation } from 'next-i18next';
import React from 'react';

interface EmailPayload {
  name: string;
  email: string;
  phone: string;
  company: string;
  description: string;
}

export default function FormSection() {
  const { t } = useTranslation('common');
  const [hasSuccessfullySentMail, setHasSuccessfullySentMail] = useState(false);
  const [hasErrored, setHasErrored] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const { register, handleSubmit, formState } = useForm();
  const { isSubmitSuccessful, isSubmitting, isSubmitted, errors } = formState;
  const recaptchaRef = React.createRef<ReCAPTCHA>();

  async function onSubmit(payload: EmailPayload) {
    if (!isCaptchaVerified) {
      alert(t('contact.form.captchaRequired'));
      return;
    }
    try {
      const token = await recaptchaRef.current?.executeAsync();
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subject: 'Email from contact form', ...payload }),
      });

      if (res.status !== 204) {
        setHasErrored(true);
      }
    } catch {
      setHasErrored(true);
      return;
    }

    setHasSuccessfullySentMail(true);
  }

  const isSent = isSubmitSuccessful && isSubmitted;
  const isDisabled = isSubmitting || isSent;
  const isSubmitDisabled = Object.keys(errors).length > 0 || isDisabled;

  const handleCaptchaChange = (value: string | null) => {
    setIsCaptchaVerified(!!value);
  };

  if (hasSuccessfullySentMail) {
    return <MailSentState />;
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {hasErrored && <ErrorMessage>{t('contact.form.error')}</ErrorMessage>}
        <InputGroup>
          <InputStack>
            {errors.name && <ErrorMessage>{t('contact.form.nameRequired')}</ErrorMessage>}
            <Input 
              placeholder={t('contact.form.name')} 
              id="name" 
              disabled={isDisabled} 
              {...register('name', { required: true })} 
            />
          </InputStack>
          <InputStack>
            {errors.email && <ErrorMessage>{t('contact.form.emailRequired')}</ErrorMessage>}
            <Input 
              placeholder={t('contact.form.email')} 
              id="email" 
              disabled={isDisabled} 
              {...register('email', { required: true })} 
            />
          </InputStack>
        </InputGroup>
        <InputStack>
          {errors.description && <ErrorMessage>{t('contact.form.messageRequired')}</ErrorMessage>}
          <Textarea
            as="textarea"
            placeholder={t('contact.form.message')}
            id="description"
            disabled={isDisabled}
            {...register('description', { required: true })}
          />
        </InputStack>
        <CaptchaWrapper>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LdMb6IqAAAAAJ7WbnXmoD00ofOE0woPMPQ2DLxV"}
            onChange={handleCaptchaChange}
          />
        </CaptchaWrapper>
        <Button as="button" type="submit">
          {t('contact.form.submit')}
        </Button>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 2;
`;

const Form = styled.form`
  & > * {
    margin-bottom: 2rem;
  }
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;

  & > *:first-child {
    margin-right: 2rem;
  }

  & > * {
    flex: 1;
  }

  ${media('<=tablet')} {
    flex-direction: column;
    & > *:first-child {
      margin-right: 0rem;
      margin-bottom: 2rem;
    }
  }
`;

const InputStack = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > *:not(:first-child) {
    margin-top: 0.5rem;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ErrorMessage = styled.p`
  color: rgb(var(--errorColor));
  font-size: 1.5rem;
`;

const Textarea = styled(Input)`
  width: 100%;
  min-height: 20rem;
`;

const CaptchaWrapper = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: start;
`;
