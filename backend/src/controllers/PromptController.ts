import { client, ClientResponse } from "../config/GoogleGeminiClient";

export const CreateEmailResponse = async (req: Request, res: Response) => {
  const response = await ClientResponse({ contents: "Help me to generate a simple email for request annual leave" });

  res.status(200).json({ message: response });
}