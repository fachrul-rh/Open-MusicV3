# Open-MusicV3
Membuat proyek RESTful API, menerapkan database,queue atau message Broker, Storage, Caching, serta Authentication dan Authorization. <br/> 
Menggunakan [Hapi](https://hapi.dev/) Framework

## Hapi Plugin dan Data Validation
Menggunakan sistem Plugin pada Hapi untuk mengelola source code <br/>
menerapkan teknik Data Validation menggunakan [<b>Joi</b>](https://joi.dev/api/?v=17.5.0)

## Database menggunakan Amazon RDS
menggunakan [<b>PostgreSL</b>](https://www.postgresql.org/docs/) pada local <i>development</i><br/>
menggunakan [<b>AMAZON RDS</b>](https://docs.aws.amazon.com/rds/index.html) pada <i>production</i>

## Message Broker dengan Amazon MQ
menggunakan [<b>Rabbit Mq</b>](https://www.rabbitmq.com/documentation.html) pada local <i>development</i><br/>
menggunakan [<b>Amazon MQ</b>](https://docs.aws.amazon.com/amazon-mq/) pada <i>production</i>

## Storage dengan Amazon S3
membuat Storage secara lokal menggunakan core modules [<b>fs</b>](https://nodejs.org/api/fs.html)<br/>
memanfaatkan teknologi cloud dengan [<b>Amazon S3</b>](https://docs.aws.amazon.com/s3/index.html)

## Caching menggunakan Amazon ElastiCache
menggunakan [<b>Redis</b>](https://redis.io/documentation) sebagai memory chaching secara lokal <br/>
production menggunakan [<b>Amazon ElastiCache</b>](https://docs.aws.amazon.com/elasticache/)

### Technologies and Library
> [<b>Hapi</b>](https://hapi.dev/) <br/>
> [<b>Joi</b>](https://joi.dev/api/?v=17.5.0) <br/>
> [<b>Amazon Cloud</b>](https://aws.amazon.com/id/) <br/>
> [<b>PostgreSL</b>](https://www.postgresql.org/docs/) <br/>
> [<b>Rabbit Mq</b>](https://www.rabbitmq.com/documentation.html) <br/>
> [<b>fs</b>](https://nodejs.org/api/fs.html) <br/>
> [<b>Redis</b>](https://redis.io/documentation) <br/>
> [<b>amqplib</b>](https://www.npmjs.com/package/amqplib) <br/>
> [<b>bcrypt</b>](https://www.npmjs.com/package/bcrypt) <br/>
> [<b>dotenv</b>](https://www.npmjs.com/package/dotenv) <br/>
> [<b>nanoid</b>](https://www.npmjs.com/package/nanoid) <br/>
> [<b>node-pg-migrate</b>](https://www.npmjs.com/package/node-pg-migrate) <br/>
> [<b>nodemailer</b>](https://www.npmjs.com/package/nodemailer) <br/>

## Instalasi dan menjalankan project Open Music

Unduh semua dependensi <br />
   ```
   npm install
   ```
Jalankan _project_ mode _development_<br />
   ```
   npm run start-dev
   ```
Mode _production_<br />
   ```
   npm run start-prod
   ```
Migrate data<br />
   ```
   npm run migrate
   ```
