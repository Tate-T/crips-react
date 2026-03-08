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
  LabelC,
  Checkbox,
  Button,
} from "./Newsletter";

export const Newsletter = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <Sect>
      <Container>
        <Way>Home / My Dashboard</Way>
        <Title>Edit Newsletter Subscriptions</Title>
        <Wrap>
          <NavBar />
          <Form>
            <Subtitle>Newsletter Subscriptions</Subtitle>
            <Labels>
              <LabelC>
                <Checkbox
                  type="checkbox"
                  checked={isSubscribed}
                  onChange={(e) => setIsSubscribed(e.target.checked)}
                />
                Subscribe
              </LabelC>
            </Labels>
            <Button type="submit">Save</Button>
          </Form>
        </Wrap>
      </Container>
    </Sect>
  );
};
