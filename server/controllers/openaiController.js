const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const textGenerator = async (req, res) => {
  // input prompt coming from client
  const userPrompt = req.body.input;
  const editedPrompt = `Create a story title based on: ${userPrompt}`;
  try {

    // Title
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: editedPrompt,
      temperature: 0.5,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      best_of: 1,
    });

    const aiOutput = response.data.choices[0].text;
    console.log(aiOutput)
    const description = `Write a entry paragraph for a story based on this title: ${aiOutput}`;

    // Entry Paragraph
    const entry = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: description,
      temperature: 0.5,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      best_of: 1,
    });

    const entryOutput = entry.data.choices[0].text;
    console.log(entryOutput);



    // Final data to be sent to client
    const finalData = {aiOutput, entryOutput};
    
    res.status(200).json({
      success: true,
      data: finalData,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }

    res.status(400).json({
      success: false,
      error: 'Prompt cannot be generated',
    });

    
  }

  

  

 

};

module.exports = { textGenerator };
