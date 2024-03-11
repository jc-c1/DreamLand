import { Button, View } from 'react-native'
import { signOut } from 'firebase/auth'

import { auth } from '../../config/firebase'

export const SignOut = () => {
  const signout = () => {
    signOut(auth)
      .then(() => {
        console.log('Successfully logged out')
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <View>
      <Button color='white' title='Sign out' onPress={signout} />
    </View>
  )
}
