import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

interface SubscribeFormProps {
  planId: number;
  planName: string;
  onSubmit: (formData: SubscribeFormData) => void;
  onCancel: () => void;
}

export interface SubscribeFormData {
  // User information
  first_name: string;
  last_name: string;
  gender: string;
  birthdate: string;
  email: string;
  password: string;
  password_confirmation: string;
  
  // Client information
  client_name: string;
  responsible_name: string;
  responsible_email: string;
  phone: string;
  address: string;
  city: string;
  postal_code: string;
}

export default function SubscribeForm({ planId, planName, onSubmit, onCancel }: SubscribeFormProps) {
  const { t } = useTranslation('common');
  
  const [formData, setFormData] = useState<SubscribeFormData>({
    first_name: '',
    last_name: '',
    gender: '',
    birthdate: '',
    email: '',
    password: '',
    password_confirmation: '',
    client_name: '',
    responsible_name: '',
    responsible_email: '',
    phone: '',
    address: '',
    city: '',
    postal_code: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field if any
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const RedAsterisk = styled.span`color: red;`;

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    // Required fields
    const requiredFields = [
      'first_name', 'last_name', 'email', 'password', 
      'password_confirmation', 'client_name', 'responsible_name', 
      'responsible_email', 'phone'
    ];
    
    requiredFields.forEach(field => {
      if (!formData[field as keyof SubscribeFormData]) {
        newErrors[field] = t('form.required');
      }
    });
    
    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('form.invalidEmail');
    }
    
    // Password confirmation match
    if (formData.password !== formData.password_confirmation) {
      newErrors.password_confirmation = t('form.passwordMismatch');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <FormOverlay>
      <FormContainer>
        <FormHeader>
          <h2>{t('subscribe.title')}</h2>
          <p>{t('subscribe.selectedPlan')}: {planName}</p>
        </FormHeader>
        
        <Form onSubmit={handleSubmit}>
          <FormSection>
            <SectionTitle>{t('subscribe.user.Information')}</SectionTitle>
            
            <FormRow>
              <FormGroup>
                <label htmlFor="first_name">{t('subscribe.user.firstName')}<RedAsterisk>*</RedAsterisk></label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                />
                {errors.first_name && <ErrorText>{errors.first_name}</ErrorText>}
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="last_name">{t('subscribe.user.lastName')}<RedAsterisk>*</RedAsterisk></label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                />
                {errors.last_name && <ErrorText>{errors.last_name}</ErrorText>}
              </FormGroup>
            </FormRow>
            
            <FormRow>
              <FormGroup>
                <label htmlFor="gender">{t('subscribe.user.gender')}<RedAsterisk>*</RedAsterisk></label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">{t('subscribe.user.selectGender')}</option>
                  <option value="male">{t('subscribe.user.male')}</option>
                  <option value="female">{t('subscribe.user.female')}</option>
                </select>
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="birthdate">{t('subscribe.user.birthdate')}<RedAsterisk>*</RedAsterisk></label>
                <input
                  type="date"
                  id="birthdate"
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={handleChange}
                />
              </FormGroup>
            </FormRow>
            
            <FormGroup>
              <label htmlFor="email">{t('subscribe.user.email')}<RedAsterisk>*</RedAsterisk></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <ErrorText>{errors.email}</ErrorText>}
            </FormGroup>
            
            <FormRow>
              <FormGroup>
                <label htmlFor="password">{t('subscribe.user.password')}<RedAsterisk>*</RedAsterisk></label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <ErrorText>{errors.password}</ErrorText>}
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="password_confirmation">{t('subscribe.user.confirmPassword')}<RedAsterisk>*</RedAsterisk></label>
                <input
                  type="password"
                  id="password_confirmation"
                  name="password_confirmation"
                  value={formData.password_confirmation}
                  onChange={handleChange}
                />
                {errors.password_confirmation && <ErrorText>{errors.password_confirmation}</ErrorText>}
              </FormGroup>
            </FormRow>
          </FormSection>
          
          <FormSection>
            <SectionTitle>{t('subscribe.client.Information')}</SectionTitle>
            
            <FormGroup>
              <label htmlFor="client_name">{t('subscribe.client.name')}<RedAsterisk>*</RedAsterisk></label>
              <input
                type="text"
                id="client_name"
                name="client_name"
                value={formData.client_name}
                onChange={handleChange}
              />
              {errors.client_name && <ErrorText>{errors.client_name}</ErrorText>}
            </FormGroup>
          </FormSection>
          
          <ButtonGroup>
            <CancelButton type="button" onClick={onCancel}>
              {t('subscribe.cancel')}
            </CancelButton>
            <SubmitButton type="submit">
              {t('subscribe.submit')}
            </SubmitButton>
          </ButtonGroup>
        </Form>
      </FormContainer>
    </FormOverlay>
  );
}

const FormOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
  overflow-y: auto;
`;

const FormContainer = styled.div`
  background-color: rgb(var(--cardBackground));
  border-radius: 1rem;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);
`;

const FormHeader = styled.div`
  padding: 2rem;
  border-bottom: 1px solid rgba(var(--text), 0.1);
  
  h2 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.6rem;
    color: rgba(var(--text), 0.8);
  }
`;

const Form = styled.form`
  padding: 2rem;
`;

const FormSection = styled.div`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(var(--text), 0.1);
`;

const FormRow = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  flex: 1;
  
  label {
    display: block;
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  
  input, select {
    width: 100%;
    padding: 1rem;
    font-size: 1.6rem;
    border: 1px solid rgba(var(--text), 0.2);
    border-radius: 0.5rem;
    background-color: rgb(var(--inputBackground));
    color: rgb(var(--text));
    
    &:focus {
      border-color: rgb(var(--primary));
      outline: none;
    }
  }
`;

const ErrorText = styled.span`
  color: rgb(220, 53, 69);
  font-size: 1.2rem;
  margin-top: 0.5rem;
  display: block;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
  margin-top: 3rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.6rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
`;

const CancelButton = styled(Button)`
  background-color: transparent;
  border: 1px solid rgba(var(--text), 0.3);
  color: rgb(var(--text));
  
  &:hover {
    background-color: rgba(var(--text), 0.1);
  }
`;

const SubmitButton = styled(Button)`
  background-color: rgb(var(--primary));
  border: 1px solid rgb(var(--primary));
  color: rgb(var(--textSecondary));
  
  &:hover {
    opacity: 0.9;
  }
`;