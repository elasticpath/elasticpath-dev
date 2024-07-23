import React from "react";
import Button from "@mui/material/Button";
import CodeBlock from "@theme/CodeBlock";
import examples from "./examples";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { styled } from "@mui/material";

const GraphqlExample: React.FC<{ example: string }> = ({ example }) => {
  const { query, queryVariables, title } = examples[example];
  const searchParams = new URLSearchParams({
    query,
    query_variables: JSON.stringify(queryVariables || {}, null, 2),
  });

  const Container = styled("div")(
    queryVariables
      ? {
          "&> div:nth-of-type(1) > div": {
            marginBottom: "0",
            borderBottomLeftRadius: "0",
            borderBottomRightRadius: "0",
          },
          "&> div:nth-of-type(2) > div": {
            marginBottom: "0",
            borderTopLeftRadius: "0",
            borderTopRightRadius: "0",
          },
        }
      : {
          "&> div:nth-of-type(1) > div": {
            marginBottom: "0",
          },
        }
  );

  return (
    <BrowserOnly>
      {() => (
        <Container>
          <div
            style={{
              width: "100%",
            }}
          >
            <CodeBlock title={title} className="language-graphql">
              {query}
            </CodeBlock>
          </div>
          {queryVariables ? (
            <div
              style={{
                width: "100%",
              }}
            >
              <CodeBlock title="Query Variables" className="language-json">
                {JSON.stringify(queryVariables, null, 2)}
              </CodeBlock>
            </div>
          ) : null}
          <div
            style={{
              width: "100%",
              textAlign: "right",
            }}
          >
            <Button href={`/docs/explorer/?${searchParams}`} target="_blank">
              Try It Out &#x276F;
            </Button>
          </div>
        </Container>
      )}
    </BrowserOnly>
  );
};

export default GraphqlExample;
