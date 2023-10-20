import express, { Request, Response, Router } from 'express';
import {create, remove, list, download } from '../modules/file.module';

const router: Router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// ***************** Api create file  *****************
router.get('/create/:name/:type', (req: Request, res: Response) => {
  create(req, res)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// ***************** Api list files *****************
router.get('/list', (req: Request, res: Response) => {
  list(req, res)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// ***************** Api download file *****************
router.get('/download/:filename', (req: Request, res: Response) => {
  download(req, res)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// ***************** Api delete file *****************
router.delete('/delete/:filename', (req: Request, res: Response) => {
  remove(req, res)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

export default router;
