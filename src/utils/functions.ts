export function checkForEnvVariables(){
  if(!process.env.POSTGRES_HOST || !process.env.POSTGRES_PORT || !process.env.POSTGRES_DB ||
     !process.env.POSTGRES_USER || !process.env.POSTGRES_PASSWORD || !process.env.POSTGRES_SCHEMA ||
     !process.env.TEST_EMAIL || !process.env.TEST_PASSWORD || !process.env.TEST_NAME ||
     !process.env.PORT || !process.env.JWT_ACCESS_SECRET || !process.env.JWT_ACCESS_TTL
    ){
      throw new Error('Environment variables are missing');
    }
}