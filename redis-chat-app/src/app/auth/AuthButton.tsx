import { Button } from "@/components/ui/button"

const AuthButton = () => {
  return (
    <div className="flex gap-3 flex-1 md:flex-row flex-col relative z-50">
  <Button className="w-full " variant={"outline"}> Sign up</Button>
  <Button className="w-full" > Login</Button>
    </div>
  )
}

export default AuthButton
