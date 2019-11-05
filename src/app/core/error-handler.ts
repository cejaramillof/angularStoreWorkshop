import { Injectable, ErrorHandler} from '@angular/core';
import * as Sentry from '@sentry/browser';
import {environment} from '@environments/environment';

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {
    Sentry.init({
      dsn: environment.sentryDsn,
      // environment: environment.name
    });
  }

  handleError(error) {
    Sentry.captureException(error.originalError || error);
  }
}
