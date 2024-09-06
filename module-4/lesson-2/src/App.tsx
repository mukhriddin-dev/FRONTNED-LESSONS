import React from "react";
import { Container } from "./components/layouts/container";
import { Section } from "./components/layouts/section";
import { Button } from "./components/ui/button";

const App: React.FC = () => {
  return (
    <>
      <Section bg="yellow">


        <Button onClick={()=>{ console.log("clicked")}} primary>
          submit
        </Button>

        <Button>
          cancel
        </Button>

        <Button>
          success
        </Button>


        <Container>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eum
            fugiat aliquam. Commodi, doloremque. Aut earum inventore mollitia
            nisi enim animi odio, quae eum minus molestias neque doloremque odit
            natus sit impedit vel eaque!
          </p>
        </Container>
      </Section>
    </>
  );
};

export default App;
