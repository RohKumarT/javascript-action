const core = require('@actions/core');
const readenv = require('./read_env');
try {
  const dotenvFile = core.getInput('path');
  const variables = readenv(dotenvFile);

/*  for (const key in variables) {
    const value = variables[key];
    core.setOutput(key, value);
	
  }
 */ 
  
  console.log(`loaded ${Object.keys(variables).length} values into the environment`); 
  core.debug(variables);
  core.setOutput('env', JSON.stringify(variables));
  
} catch (error) {
  core.setFailed(error.message);
}
