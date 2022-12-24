import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
          firstName:"",
          email:"",
          type:"hireMe",
          comment:""
    },
    onSubmit: (values) => {
      submit('', values)
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is Required."),
      email:Yup.string().email().required("Email is Required."),
      comment:Yup.string().required("Comment is Required.")
    }),
  });

  useEffect(() => {
    if (response !== null) {
      onOpen(response.type, response.message);
      if (response.type==="success") {
        formik.resetForm({
                firstName:"",
                email:"",
                type:"hireMe",
                comment:""
          });
      }
      
    }
  }, [response])
  
  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={(e) => {
            e.preventDefault()
            formik.handleSubmit()
          }}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.getFieldProps('firstName').onChange}
                  onBlur={formik.getFieldProps('firstName').onBlur}
                />
                <FormErrorMessage color="red.400">
                  {
                    formik.touched.firstName && formik.errors.firstName &&
                    <span>
                      {formik.errors.firstName}
                    </span>
                  }
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.getFieldProps('email').onChange}
                  onBlur={formik.getFieldProps('email').onBlur}
                />
                <FormErrorMessage color="red.400">
                  {
                    formik.touched.email && formik.errors.email &&
                    <span>
                      {formik.errors.email}
                    </span>
                  }
                </FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  value={formik.values.type}
                  onChange={formik.getFieldProps('type').onChange}
                  onBlur={formik.getFieldProps('type').onBlur}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  value={formik.values.comment}
                  height={250}
                  onChange={formik.getFieldProps('comment').onChange}
                  onBlur={formik.getFieldProps('comment').onBlur}
                />

                <FormErrorMessage color="red.400">
                  {
                    formik.touched.comment && formik.errors.comment &&
                    <span>
                      {formik.errors.comment}
                    </span>
                  }
                </FormErrorMessage>
              </FormControl>
              <Button isLoading={ isLoading } type="submit" colorScheme="purple" width="full">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
