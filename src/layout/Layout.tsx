import { ReactNode } from "react"
import NavComponent from "../components/NavComponent"
import { Container } from "react-bootstrap"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavComponent />
      <Container>{children}</Container>
    </>
  )
}
