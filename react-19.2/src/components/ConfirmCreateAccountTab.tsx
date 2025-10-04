import { Button } from './ui/button'

export const ConfirmCreateAccountTab = () => {
  return (
    <Button
      onClick={() => alert("Account Successfully Created!")}
    >
      Confirm Account Registration
    </Button>
  )
}
