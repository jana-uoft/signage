import React from 'react'

import {
  Flex,
  Input,
  VStack,
  Button,
  FormLabel,
  FormControl
} from '@chakra-ui/core'

function Login () {
  const handleLogin = e => {
    e.preventDefault()
    console.log('LOGIN')
  }

  return (
    <Flex
      as='form'
      onSubmit={handleLogin}
      maxW='320px'
      m='0px auto'
      flexDirection='column'
      height='100%'
      justifyContent='center'
      alignItems='center'
    >
      <VStack spacing='24px' width='100%'>
        <FormControl id='email' isRequired>
          <FormLabel>Email</FormLabel>
          <Input type='email' required />
        </FormControl>
        <FormControl id='password' isRequired>
          <FormLabel>Password</FormLabel>
          <Input type='password' required />
        </FormControl>
        <Button type='submit' mt='12px'>Login</Button>
      </VStack>
    </Flex>
  )
}

export default Login
