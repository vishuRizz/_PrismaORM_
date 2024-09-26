# installing prismaORM 
- npm init -y
- npm install prisma typescript ts-node @types/node --save-dev
- npx tsc -init 

# initialising prisma project
do this only once when starting the project, this basically tells node that start using prisma as dependency! and it creates schema.prisma file
- npx primsa init

# after making changes to schema.prisma run this file to intiate SQL queries
- npx prisma migrate dev --name Initailise the schema


# now to generate the exports of schema models
- npx prisma generate
