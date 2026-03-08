import { useState } from "react";
import { Container } from "../Container/Container";
import NavBar from "../NavBar/NavBar";
import {
  Sect,
  Way,
  Title,
  Wrap,
  Form,
  Subtitle,
  Labels,
  Label,
  Desc,
  Red,
  Input,
  LabelC,
  Checkbox,
  Button,
} from "./AccountInformation";

export const AccountInformation = () => {
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  return (
    <Sect>
      <Container>
        <Way>Home / My Dashboard</Way>
        <Title>Edit Account Information</Title>
        <Wrap>
          <NavBar />
          <Form>
            <Subtitle>Account Information</Subtitle>
            <Labels>
              <Label>
                <Desc>
                  First name <Red>*</Red>
                </Desc>
                <Input placeholder="Alex" required type="text" />
              </Label>

              <Label>
                <Desc>
                  Last name <Red>*</Red>
                </Desc>
                <Input placeholder="Driver" required type="text" />
              </Label>

              {showEmailInput && (
                <Label>
                  Email
                  <Input required type="email" />
                </Label>
              )}
              {showPasswordInput && (
                <Label>
                  Password
                  <Input required type="password" />
                </Label>
              )}
              <LabelC>
                <Checkbox
                  type="checkbox"
                  checked={showEmailInput}
                  onChange={(e) => setShowEmailInput(e.target.checked)}
                />
                Change Email
              </LabelC>
              <LabelC>
                <Checkbox
                  type="checkbox"
                  checked={showPasswordInput}
                  onChange={(e) => setShowPasswordInput(e.target.checked)}
                />
                Change Password
              </LabelC>
            </Labels>
            <Button type="submit">Save</Button>
          </Form>
        </Wrap>
      </Container>
    </Sect>
  );
};
