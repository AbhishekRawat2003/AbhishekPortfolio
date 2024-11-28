import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import { Subject } from 'rxjs';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'abhirawathdr@gmail.com',
      pass: 'Abhi9639@',
    }
  });
  server.set('view engine', 'html');
  server.set('views', browserDistFolder);
  server.use(bodyParser.json());

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('**', express.static(browserDistFolder, {
    maxAge: '1y',
    index: 'index.html',
  }));

  // All regular routes use the Angular engine
  server.get('**', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });
  server.post('/send-email', (req, res) => {
    const { name, emial, message } = req.body;
    const mailOptions = {
      from: emial,
      to: 'abhirawathdr@gmail.com',
      Subject: `New Message from ${name}`,
      text: `you have recieved a new message from ${name} (${emial}):\n\n ${message}`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error while sending email", error);
        return res.status(500).json({ message: 'Error sending email', error });
      }
      return res.status(200).json({ message: 'Email sent successfully', info });
    });
  })

  return server;
}



function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
