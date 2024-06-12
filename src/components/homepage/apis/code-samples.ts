const codeSamples = {
  "React Hooks":
    'import { useProduct } from "@elasticpath/react-shopper-hooks" \n\nexport default function Products() {\n   const { data: product, isLoading } = useProduct({\n     productId: "18ab29..."\n   })\n\n    return (\n     <div>\n       {isLoading && <span>Loading...</span>}\n       {product && <span>{product.attributes.name}</span>}\n     </div>\n   )\n}',
  "node.js":
    'fetch("https://useast.api.elasticpath.com/catalog/products/${productId}", {\n' +
    "    headers: {\n" +
    '    "Content-Type": "application/json",\n' +
    '    Authorization: "Bearer XXXX"\n' +
    "  }\n" +
    "}).then(response => response.json())\n" +
    "  .then(data => console.log(data));",
  Python:
    "import requests\n" +
    "\n" +
    'url = "https://useast.api.elasticpath.com/catalog/products/{}".format(productId)\n' +
    "headers = {\n" +
    '    "Content-Type": "application/json",\n' +
    '    "Authorization": "Bearer XXXX"  # Replace XXXX with your actual token\n' +
    "}\n" +
    "\n" +
    "response = requests.get(url, headers=headers)\n" +
    "data = response.json()\n" +
    "print(data)",
  go:
    "package main\n" +
    "\n" +
    "import (\n" +
    '\t"fmt"\n' +
    '\t"io/ioutil"\n' +
    '\t"net/http"\n' +
    ")\n" +
    "\n" +
    "func main() {\n" +
    '\tproductID := "YOUR_PRODUCT_ID" // Replace with actual product ID\n' +
    '\ttoken := "XXXX"                // Replace XXXX with your actual token\n' +
    "\n" +
    '\turl := fmt.Sprintf("https://useast.api.elasticpath.com/catalog/products/%s", productID)\n' +
    "\n" +
    '\treq, err := http.NewRequest("GET", url, nil)\n' +
    "\tif err != nil {\n" +
    '\t\tfmt.Println("Error creating request:", err)\n' +
    "\t\treturn\n" +
    "\t}\n" +
    "\n" +
    '\treq.Header.Set("Content-Type", "application/json")\n' +
    '\treq.Header.Set("Authorization", "Bearer "+token)\n' +
    "\n" +
    "\tclient := &http.Client{}\n" +
    "\tresp, err := client.Do(req)\n" +
    "\tif err != nil {\n" +
    '\t\tfmt.Println("Error making request:", err)\n' +
    "\t\treturn\n" +
    "\t}\n" +
    "\tdefer resp.Body.Close()\n" +
    "\n" +
    "\tbody, err := ioutil.ReadAll(resp.Body)\n" +
    "\tif err != nil {\n" +
    '\t\tfmt.Println("Error reading response body:", err)\n' +
    "\t\treturn\n" +
    "\t}\n" +
    "\n" +
    "\tfmt.Println(string(body))\n" +
    "}",
  Java:
    "import java.io.BufferedReader;\n" +
    "import java.io.IOException;\n" +
    "import java.io.InputStreamReader;\n" +
    "import java.net.HttpURLConnection;\n" +
    "import java.net.URL;\n" +
    "\n" +
    "public class Main {\n" +
    "    public static void main(String[] args) {\n" +
    '        String productId = "YOUR_PRODUCT_ID"; // Replace with actual product ID\n' +
    '        String token = "XXXX"; // Replace XXXX with your actual token\n' +
    "        \n" +
    '        String url = "https://useast.api.elasticpath.com/catalog/products/" + productId;\n' +
    "        \n" +
    "        try {\n" +
    "            URL obj = new URL(url);\n" +
    "            HttpURLConnection con = (HttpURLConnection) obj.openConnection();\n" +
    "            \n" +
    "            // Set the request method\n" +
    '            con.setRequestMethod("GET");\n' +
    "            \n" +
    "            // Set request headers\n" +
    '            con.setRequestProperty("Content-Type", "application/json");\n' +
    '            con.setRequestProperty("Authorization", "Bearer " + token);\n' +
    "            \n" +
    "            int responseCode = con.getResponseCode();\n" +
    "            if (responseCode == HttpURLConnection.HTTP_OK) {\n" +
    "                BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));\n" +
    "                String inputLine;\n" +
    "                StringBuffer response = new StringBuffer();\n" +
    "                \n" +
    "                while ((inputLine = in.readLine()) != null) {\n" +
    "                    response.append(inputLine);\n" +
    "                }\n" +
    "                in.close();\n" +
    "                \n" +
    "                // Print response\n" +
    "                System.out.println(response.toString());\n" +
    "            } else {\n" +
    '                System.out.println("HTTP request failed with error code: " + responseCode);\n' +
    "            }\n" +
    "        } catch (IOException e) {\n" +
    "            e.printStackTrace();\n" +
    "        }\n" +
    "    }\n" +
    "}",
  curl:
    'curl -X GET "https://useast.api.elasticpath.com/catalog/products/${productId}" \\\n' +
    '-H "Content-Type: application/json" \\\n' +
    '-H "Authorization: Bearer XXXX"',
  sdk: `import { gateway as EpGateway } from '@moltin/sdk';
const ElasticPath = EpGateway({
  client_id: "X",
  client_secret: "X",
});

ElasticPath.Authenticate().then(response => {
  console.log('authenticated', response)
})
`,
};

export default codeSamples;
