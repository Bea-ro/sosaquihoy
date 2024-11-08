import { HttpInterceptorFn } from '@angular/common/http';

export const locationPermissionInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
