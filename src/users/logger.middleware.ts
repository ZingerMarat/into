import { Injectable, type NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: any) => void) {
    console.log(
      `[${req.method}] ${req.protocol}://${req.get('host')}${req.originalUrl}`,
    );

    next();
  }
}
