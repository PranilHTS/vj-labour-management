let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { initializeApp, cert } from 'firebase-admin/app'; //_splitter_
import { readFile } from 'fs'; //_splitter_
import { getFirestore } from 'firebase-admin/firestore'; //_splitter_
import { getAuth } from 'firebase-admin/auth'; //_splitter_
import { initializeApp as clientInitializeApp } from 'firebase/app'; //_splitter_
import {
  getAuth as clientGetAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth'; //_splitter_
import { XMLService } from '../utils/ndefault-xml/XML/XMLService'; //_splitter_
//append_imports_end
export class vendors {
  public firestoreDb: any;
  public firebaseAuth: any;
  public firebaseClientAuth: any;
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.firebaseInitializationFunction();

    this.serviceName = 'vendors';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new vendors(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_vendors_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: vendors');

    //appendnew_flow_vendors_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: vendors');

    this.app['post'](
      `${this.serviceBasePath}/getFromCollection`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_npVueYySnG3qNfeN(bh);
          //appendnew_next_sd_RNQxZhp3yRgF2pT4
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_RNQxZhp3yRgF2pT4');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/updateDocument`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_XsYtuiRohhUm4JWB(bh);
          //appendnew_next_sd_0ChOrf8j37VTRe2a
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_0ChOrf8j37VTRe2a');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/getVendorTransactions`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_vqVOSlVzfApKyD1U(bh);
          //appendnew_next_sd_U7Be0qXxxUtC4nrU
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_U7Be0qXxxUtC4nrU');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/login`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_RPHyvWHJNvx3f5S3(bh);
          //appendnew_next_sd_RXRWAAsdZFzb4A1D
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_RXRWAAsdZFzb4A1D');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/addRole`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_529l87oeLr3BAF0Y(bh);
          //appendnew_next_sd_iWraHKQUfn9GDSSN
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_iWraHKQUfn9GDSSN');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/addDocument`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_19l6U6K5dwVYldCX(bh);
          //appendnew_next_sd_9a7deD2kX8fgSOAq
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_9a7deD2kX8fgSOAq');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/deleteDocument`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_uBkagU3EPzbKAGXd(bh);
          //appendnew_next_sd_tFnprJ8nFJUMbgEA
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_tFnprJ8nFJUMbgEA');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/addEmployeeESSL`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_xtaEvS4tOaD8nkT2(bh);
          //appendnew_next_sd_p3fMYBSk8WiWBbN5
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_p3fMYBSk8WiWBbN5');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/addApprovedData`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_xS1u1ROsZCQPvzZa(bh);
          //appendnew_next_sd_1mE2ZUXLahrQ4Rn4
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_1mE2ZUXLahrQ4Rn4');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/createAdminUser`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_NyYR80gQ1NRFGcub(bh);
          //appendnew_next_sd_rheYR5QoQkElSS2j
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_rheYR5QoQkElSS2j');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/signInAdmin`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_h29Gr1sk9pWNAkpM(bh);
          //appendnew_next_sd_fVAZf80ulvkjIKmd
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_fVAZf80ulvkjIKmd');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_vendors_HttpIn
  }
  //   service flows_vendors

  async sd_F5toUQkYambgeaRe(...others) {
    try {
      var bh: any = {
        input: {},
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_SZnwPyYJ0SNiNzDi(bh);
      //appendnew_next_sd_F5toUQkYambgeaRe
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_F5toUQkYambgeaRe');
    }
  }

  //appendnew_flow_vendors_start

  async sd_SZnwPyYJ0SNiNzDi(bh) {
    try {
      bh.firebaseConfig = {
        apiKey: 'AIzaSyA8yl-q-sgS-TU7XgkOYtXTiw6wBtFqDWw',
        authDomain: 'vj-labour-onboarding.firebaseapp.com',
        projectId: 'vj-labour-onboarding',
        storageBucket: 'vj-labour-onboarding.appspot.com',
        messagingSenderId: '1006675202027',
        appId: '1:1006675202027:web:7494a83879b5d0b074d3ae',
        measurementId: 'G-GQYWHQNY42',
      };
      bh = await this.sd_nFpTiP33sERo0WLF(bh);
      //appendnew_next_sd_SZnwPyYJ0SNiNzDi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SZnwPyYJ0SNiNzDi');
    }
  }

  async sd_nFpTiP33sERo0WLF(bh) {
    try {
      //appendnew_next_sd_nFpTiP33sERo0WLF
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nFpTiP33sERo0WLF');
    }
  }

  async sd_npVueYySnG3qNfeN(bh) {
    try {
      let query = this.firestoreDb.collection(bh.input.body.collectionName);
      for (let i = 0; i < bh.input.body.filter.length; i++) {
        query = query.where(
          bh.input.body.filter[i].field,
          '==',
          bh.input.body.filter[i].value
        );
      }
      if (bh.input.body.sort) {
        for (let i = 0; i < bh.input.body.sort.length; i++) {
          query = query.orderBy(bh.input.body.sort[i].field);
        }
      }
      if (bh.input.body.lastDoc) {
        query = query.startAfter(bh.input.body.lastDoc);
      } else if (bh.input.body.endBefore) {
        query = query.endBefore(bh.input.body.endBefore);
      }
      if (bh.input.body.limit) {
        query = query.limit(bh.input.body.limit);
      }
      let data = await query.get();
      let dataArray = [];
      data.forEach((firebaseDoc) => {
        let firebaseData = firebaseDoc.data();
        if (firebaseData.startTime) {
          console.log(
            firebaseData.startTime.toDate(),
            firebaseData.endTime.toDate(),
            firebaseData.employeeId
          );
        }
        firebaseData.id = firebaseDoc.id;
        dataArray.push(firebaseData);
      });
      bh.input.response = dataArray;
      bh = await this.sd_vJDQB84Mo66fNDIu(bh);
      //appendnew_next_sd_npVueYySnG3qNfeN
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_npVueYySnG3qNfeN');
    }
  }

  async sd_vJDQB84Mo66fNDIu(bh) {
    try {
      bh.web.res.status(200).send(bh.input.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vJDQB84Mo66fNDIu');
    }
  }

  async sd_XsYtuiRohhUm4JWB(bh) {
    try {
      bh.input.response = await this.firestoreDb
        .collection(bh.input.body.collectionName)
        .doc(bh.input.body.id)
        .update(bh.input.body.data);
      bh = await this.sd_OUglfUkusziXCwhs(bh);
      //appendnew_next_sd_XsYtuiRohhUm4JWB
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XsYtuiRohhUm4JWB');
    }
  }

  async sd_OUglfUkusziXCwhs(bh) {
    try {
      bh.web.res.status(200).send(bh.input.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OUglfUkusziXCwhs');
    }
  }

  async sd_vqVOSlVzfApKyD1U(bh) {
    try {
      let query = bh.input.body;
      console.log(bh.input.body);
      bh.local.body = `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
    <GetTransactionsLog xmlns="http://tempuri.org/">
      <FromDate>${query.fromDate}</FromDate>
      <ToDate>${query.toDate}</ToDate>
      <SerialNumber>${query.serialNumber}</SerialNumber>
      <UserName>ApiUser</UserName>
      <UserPassword>Api@1234</UserPassword>
      <strDataList></strDataList>
    </GetTransactionsLog>
  </soap:Body>
</soap:Envelope>
`;
      bh = await this.sd_prAvwpAAjHJ4sl3X(bh);
      //appendnew_next_sd_vqVOSlVzfApKyD1U
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vqVOSlVzfApKyD1U');
    }
  }

  async sd_prAvwpAAjHJ4sl3X(bh) {
    try {
      let requestOptions = {
        url: 'http://125.99.67.214:8526/iclock/WebAPIService.asmx',
        timeout: 30000,
        method: 'post',
        headers: { 'Content-Type': 'text/xml' },
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.local.body,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'text',
        params: { op: 'GetTransactionsLog' },
        username: undefined,
        password: undefined,
        token: undefined,
        rejectUnauthorized: undefined,
        useQuerystring: false,
      };
      if (!false) {
        requestOptions.rejectUnauthorized = false;
      }
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.result = responseMsg;
      bh = await this.sd_Tizw6FCQc8gA8YUD(bh);
      //appendnew_next_sd_prAvwpAAjHJ4sl3X
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_prAvwpAAjHJ4sl3X');
    }
  }

  async sd_Tizw6FCQc8gA8YUD(bh) {
    try {
      console.log('server Response', bh.local.result);
      bh = await this.sd_Lo2kvDJ73Hf18Lq8(bh);
      //appendnew_next_sd_Tizw6FCQc8gA8YUD
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Tizw6FCQc8gA8YUD');
    }
  }

  async sd_Lo2kvDJ73Hf18Lq8(bh) {
    try {
      let parsedValue = await XMLService.getInstance().xml(
        bh.local.result.payload,
        bh,
        '$',
        '_'
      );
      bh.local.parsedResult = parsedValue;
      bh = await this.sd_IHuWR1d1dOEvT7zg(bh);
      //appendnew_next_sd_Lo2kvDJ73Hf18Lq8
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Lo2kvDJ73Hf18Lq8');
    }
  }

  async sd_IHuWR1d1dOEvT7zg(bh) {
    try {
      let attendanceDataString =
        bh.local.parsedResult['soap:Envelope']['soap:Body'][0][
          'GetTransactionsLogResponse'
        ][0]['strDataList'][0];
      let resultObj = {};
      let transactionsStringArray = attendanceDataString.split('\n');
      let processingEmployeeId = '';
      let processingDate = '';
      let employeeObj = {};
      let dateObjStartTime = '';
      let dateObjEndTime = '';
      console.log(transactionsStringArray);
      for (let i = 0; i < transactionsStringArray.length - 1; i++) {
        let singleRowData = transactionsStringArray[i].split('\t');
        console.log(singleRowData);
        let currentEmployeeId = singleRowData[0];
        let currentDate = singleRowData[1].split(' ')[0];
        let currentTime = singleRowData[1].split(' ')[1];

        if (i == 0) {
          dateObjStartTime = currentTime;
          dateObjEndTime = currentTime;
          processingDate = currentDate;
          processingEmployeeId = currentEmployeeId;
          resultObj[processingEmployeeId] = [];
        }
        if (currentEmployeeId !== processingEmployeeId) {
          resultObj[processingEmployeeId].push({
            startTime: dateObjStartTime,
            endTime: dateObjEndTime,
            date: processingDate,
          });
          processingEmployeeId = currentEmployeeId;
          processingDate = currentDate;
          dateObjStartTime = currentTime;
          resultObj[processingEmployeeId] = [];
        }
        if (
          currentEmployeeId == processingEmployeeId &&
          processingDate == currentDate
        ) {
          dateObjEndTime = currentTime;
        } else if (
          currentEmployeeId == processingEmployeeId &&
          processingDate !== currentDate
        ) {
          console.log(i);
          resultObj[processingEmployeeId].push({
            startTime: dateObjStartTime,
            endTime: dateObjEndTime,
            date: processingDate,
          });
          processingDate = currentDate;
          dateObjStartTime = currentTime;
        }
      }
      bh.local.finalResultObj = resultObj;
      bh = await this.sd_sMqyjURBORA7QPaS(bh);
      //appendnew_next_sd_IHuWR1d1dOEvT7zg
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IHuWR1d1dOEvT7zg');
    }
  }

  async sd_sMqyjURBORA7QPaS(bh) {
    try {
      bh.web.res.status(200).send(bh.local.finalResultObj);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sMqyjURBORA7QPaS');
    }
  }

  async sd_yviq2OPBSHrnXv94(bh) {
    try {
      console.log(bh.error);
      bh = await this.sd_hFFE5x4kHRMAUsBq(bh);
      //appendnew_next_sd_yviq2OPBSHrnXv94
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yviq2OPBSHrnXv94');
    }
  }

  async sd_hFFE5x4kHRMAUsBq(bh) {
    try {
      bh.web.res
        .status(500)
        .send({ error: bh.error.toString(), success: false });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hFFE5x4kHRMAUsBq');
    }
  }

  async sd_RPHyvWHJNvx3f5S3(bh) {
    try {
      bh.local.userDocs = await this.firestoreDb
        .collection('AdminUsers')
        .where('email', '==', bh.input.body.email)
        .get();
      console.log(bh.local.userDocs.empty);
      bh = await this.sd_OA0IRO0Hmczcz0ts(bh);
      //appendnew_next_sd_RPHyvWHJNvx3f5S3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RPHyvWHJNvx3f5S3');
    }
  }

  async sd_OA0IRO0Hmczcz0ts(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.local.userDocs.empty,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_zbgHmSswhLzrXdSz(bh);
      } else if (
        this.sdService.operators['false'](
          bh.local.userDocs.empty,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_uEwQIpdBBbfgFvOT(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OA0IRO0Hmczcz0ts');
    }
  }

  async sd_zbgHmSswhLzrXdSz(bh) {
    try {
      bh.web.res
        .status(200)
        .send({ error: 'Invalid email or password', success: false });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zbgHmSswhLzrXdSz');
    }
  }

  async sd_uEwQIpdBBbfgFvOT(bh) {
    try {
      bh.local.userDocs.forEach((userDoc) => {
        bh.local.userDocData = userDoc.data();
        bh.local.userDocData.id = userDoc.id;
      });

      bh = await this.sd_b9DXQtrwuVCKubuQ(bh);
      //appendnew_next_sd_uEwQIpdBBbfgFvOT
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uEwQIpdBBbfgFvOT');
    }
  }

  async sd_b9DXQtrwuVCKubuQ(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.body.password,
          bh.local.userDocData.password,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_2D1QeJgwLmTWB1Gg(bh);
      } else if (
        this.sdService.operators['neq'](
          bh.input.body.password,
          bh.local.userDocData.password,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_OzZT4VOg1ziIR1A7(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_b9DXQtrwuVCKubuQ');
    }
  }

  async sd_2D1QeJgwLmTWB1Gg(bh) {
    try {
      bh.web.res
        .status(200)
        .send({ success: true, userDocData: bh.local.userDocData });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2D1QeJgwLmTWB1Gg');
    }
  }

  async sd_OzZT4VOg1ziIR1A7(bh) {
    try {
      bh.web.res
        .status(200)
        .send({ error: 'Invalid email or password', success: false });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OzZT4VOg1ziIR1A7');
    }
  }

  async sd_529l87oeLr3BAF0Y(bh) {
    try {
      let userInfo = bh.input.body;
      let availableData = Object.keys(userInfo);
      bh.local.isBodyCorrect = ['rights', 'name'].every((val) =>
        availableData.includes(val)
      );

      bh = await this.sd_RRbyradq8xdneVFg(bh);
      //appendnew_next_sd_529l87oeLr3BAF0Y
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_529l87oeLr3BAF0Y');
    }
  }

  async sd_RRbyradq8xdneVFg(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isBodyCorrect,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_NssuidlHheMbU8eN(bh);
      } else if (
        this.sdService.operators['false'](
          bh.local.isBodyCorrect,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_vXAvws09sbaB07zQ(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RRbyradq8xdneVFg');
    }
  }

  async sd_NssuidlHheMbU8eN(bh) {
    try {
      bh.local.addResult = await this.firestoreDb
        .collection('AdminRoles')
        .add(bh.input.body);
      bh = await this.sd_YzPLklyySbfqIUop(bh);
      //appendnew_next_sd_NssuidlHheMbU8eN
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NssuidlHheMbU8eN');
    }
  }

  async sd_YzPLklyySbfqIUop(bh) {
    try {
      bh.web.res.status(200).send(bh.local.addResult);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YzPLklyySbfqIUop');
    }
  }

  async sd_vXAvws09sbaB07zQ(bh) {
    try {
      bh.web.res
        .status(200)
        .send({
          success: false,
          message: 'Body does not have the right information',
        });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vXAvws09sbaB07zQ');
    }
  }

  async sd_19l6U6K5dwVYldCX(bh) {
    try {
      bh.input.response = await this.firestoreDb
        .collection(bh.input.body.collectionName)
        .add(bh.input.body.data);
      bh = await this.sd_Z1n85a9fTyoULary(bh);
      //appendnew_next_sd_19l6U6K5dwVYldCX
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_19l6U6K5dwVYldCX');
    }
  }

  async sd_Z1n85a9fTyoULary(bh) {
    try {
      bh.web.res.status(200).send(bh.input.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Z1n85a9fTyoULary');
    }
  }

  async sd_uBkagU3EPzbKAGXd(bh) {
    try {
      let successfulDeletions = [];
      let failedDeletions = [];
      for (let i = 0; i < bh.input.body.data.length; i++) {
        try {
          await this.firestoreDb
            .collection(bh.input.body.collectionName)
            .doc(bh.input.body.data[i])
            .delete();
          successfulDeletions.push(bh.input.body.data[i]);
        } catch (err) {
          console.log(err);
          failedDeletions.push(bh.input.body.data[i]);
        }
      }
      bh.input.response = { successfulDeletions, failedDeletions };
      bh = await this.sd_Z83HkYP5wrape8cz(bh);
      //appendnew_next_sd_uBkagU3EPzbKAGXd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uBkagU3EPzbKAGXd');
    }
  }

  async sd_Z83HkYP5wrape8cz(bh) {
    try {
      bh.web.res.status(200).send(bh.input.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Z83HkYP5wrape8cz');
    }
  }

  async sd_xtaEvS4tOaD8nkT2(bh) {
    try {
      let data = bh.input.body;
      console.log(bh.input.body);
      bh.local.body = `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <AddEmployee xmlns="http://tempuri.org/">
      <APIKey>string</APIKey>
      <EmployeeCode>${data.employeeCode}</EmployeeCode>
      <EmployeeName>${data.employeeName}</EmployeeName>
      <CardNumber></CardNumber>
      <SerialNumber>${data.serialNumber}</SerialNumber>
      <UserName>ApiUser</UserName>
      <UserPassword>Api@1234</UserPassword>
      <CommandId>1</CommandId>
    </AddEmployee>
  </soap:Body>
</soap:Envelope>
`;
      bh = await this.sd_HVVCrKKyMrtkPiyc(bh);
      //appendnew_next_sd_xtaEvS4tOaD8nkT2
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xtaEvS4tOaD8nkT2');
    }
  }

  async sd_HVVCrKKyMrtkPiyc(bh) {
    try {
      let requestOptions = {
        url: 'http://125.99.67.214:8526/webapiservice.asmx?',
        timeout: 30000,
        method: 'post',
        headers: { 'Content-Type': 'text/xml' },
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.local.body,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'text',
        params: { op: 'AddEmployee' },
        username: undefined,
        password: undefined,
        token: undefined,
        rejectUnauthorized: undefined,
        useQuerystring: false,
      };
      if (!false) {
        requestOptions.rejectUnauthorized = false;
      }
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.result = responseMsg;
      bh = await this.sd_DCqL7bZneIzYd9Se(bh);
      //appendnew_next_sd_HVVCrKKyMrtkPiyc
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HVVCrKKyMrtkPiyc');
    }
  }

  async sd_DCqL7bZneIzYd9Se(bh) {
    try {
      console.log('server Response', bh.local.result);
      bh = await this.sd_v5VQcm1sHdynIu0k(bh);
      //appendnew_next_sd_DCqL7bZneIzYd9Se
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DCqL7bZneIzYd9Se');
    }
  }

  async sd_v5VQcm1sHdynIu0k(bh) {
    try {
      let parsedValue = await XMLService.getInstance().xml(
        bh.local.result.payload,
        bh,
        '$',
        '_'
      );
      bh.local.parsedResult = parsedValue;
      bh = await this.sd_yygTbYCYYXkmVuRb(bh);
      //appendnew_next_sd_v5VQcm1sHdynIu0k
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_v5VQcm1sHdynIu0k');
    }
  }

  async sd_yygTbYCYYXkmVuRb(bh) {
    try {
      bh.web.res.status(200).send(bh.local.parsedResult);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yygTbYCYYXkmVuRb');
    }
  }

  async sd_xS1u1ROsZCQPvzZa(bh) {
    try {
      let successDocs = [];
      console.log(bh.input.body);
      let errorDocs = [];
      for (let i = 0; i < bh.input.body.data.length; i++) {
        let dateSplitArray = bh.input.body.data[i].date.split('-');
        let year = dateSplitArray[0];
        let month = dateSplitArray[1];
        let day = dateSplitArray[2];
        try {
          await this.firestoreDb
            .collection(
              'ApprovedUsers/' + year + '/' + month + '/' + day + '/attendance'
            )
            .add(bh.input.body.data[i]);
          successDocs.push(bh.input.body.data[i].id);
        } catch (err) {
          console.log(err);
          errorDocs.push({ doc: bh.input.body.data[i], err });
        }
      }
      bh.input.response = { successDocs, errorDocs };
      bh = await this.sd_Mh2ZJAPzzhUokSAE(bh);
      //appendnew_next_sd_xS1u1ROsZCQPvzZa
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xS1u1ROsZCQPvzZa');
    }
  }

  async sd_Mh2ZJAPzzhUokSAE(bh) {
    try {
      bh.web.res.status(200).send(bh.input.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Mh2ZJAPzzhUokSAE');
    }
  }

  async sd_NyYR80gQ1NRFGcub(bh) {
    try {
      let userInfo = bh.input.body;
      let availableData = Object.keys(userInfo);
      bh.local.isBodyCorrect = [
        'email',
        'password',
        'projects',
        'name',
        'mobile',
        'role',
      ].every((val) => availableData.includes(val));

      bh = await this.sd_nHzFjfY2zwn64qRr(bh);
      //appendnew_next_sd_NyYR80gQ1NRFGcub
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NyYR80gQ1NRFGcub');
    }
  }

  async sd_nHzFjfY2zwn64qRr(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isBodyCorrect,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_881w0U6YPdipP6XH(bh);
      } else if (
        this.sdService.operators['false'](
          bh.local.isBodyCorrect,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_UCpVDnXOdb82zfjx(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nHzFjfY2zwn64qRr');
    }
  }

  async sd_881w0U6YPdipP6XH(bh) {
    try {
      let data = bh.input.body;
      let userRecord = await this.firebaseAuth.createUser({
        email: data.email,
        phoneNumber: data.mobile,
        password: data.password,
      });
      bh.local.writeResult = this.firestoreDb
        .collection('AdminUsers')
        .doc(userRecord.uid)
        .set(data);
      bh = await this.sd_FJZOzDw0Mi1wxqJp(bh);
      //appendnew_next_sd_881w0U6YPdipP6XH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_881w0U6YPdipP6XH');
    }
  }

  async sd_FJZOzDw0Mi1wxqJp(bh) {
    try {
      bh.local.addResult = await this.firestoreDb
        .collection('AdminUsers')
        .add(bh.input.body);
      bh = await this.sd_CaLITEAdz7WxZrk3(bh);
      //appendnew_next_sd_FJZOzDw0Mi1wxqJp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FJZOzDw0Mi1wxqJp');
    }
  }

  async sd_CaLITEAdz7WxZrk3(bh) {
    try {
      bh.web.res.status(200).send(bh.local.addResult);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CaLITEAdz7WxZrk3');
    }
  }

  async sd_UCpVDnXOdb82zfjx(bh) {
    try {
      bh.web.res
        .status(200)
        .send({
          success: false,
          message: 'Body does not have the right information',
        });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UCpVDnXOdb82zfjx');
    }
  }

  async sd_h29Gr1sk9pWNAkpM(bh) {
    try {
      let data = bh.input.body;
      bh.local.signInSuccess = { success: true };
      try {
        bh.local.signInResult = await signInWithEmailAndPassword(
          this.firebaseClientAuth,
          data.email,
          data.password
        );
        console.log(bh.local.signInResult);
      } catch (err) {
        bh.local.signInSuccess = { success: false };
      }

      bh = await this.sd_lCmdnR1TI3kQ2jX9(bh);
      //appendnew_next_sd_h29Gr1sk9pWNAkpM
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_h29Gr1sk9pWNAkpM');
    }
  }

  async sd_lCmdnR1TI3kQ2jX9(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.local.signInSuccess.success,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_YxezhWH3atbG2cqs(bh);
      } else if (
        this.sdService.operators['false'](
          bh.local.signInSuccess.success,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_tVoN2L8SfVNxnCty(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lCmdnR1TI3kQ2jX9');
    }
  }

  async sd_YxezhWH3atbG2cqs(bh) {
    try {
      bh.local.userDocs = await this.firestoreDb
        .collection('AdminUsers')
        .where('email', '==', bh.input.body.email)
        .get();
      console.log(bh.local.userDocs.empty);
      bh = await this.sd_5LF8GSuaI9CWVrPN(bh);
      //appendnew_next_sd_YxezhWH3atbG2cqs
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YxezhWH3atbG2cqs');
    }
  }

  async sd_5LF8GSuaI9CWVrPN(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.local.userDocs.empty,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Gdz4K5C5QQYmnuN5(bh);
      } else if (
        this.sdService.operators['false'](
          bh.local.userDocs.empty,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_SwRM8plApCGbtGZ3(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5LF8GSuaI9CWVrPN');
    }
  }

  async sd_Gdz4K5C5QQYmnuN5(bh) {
    try {
      bh.web.res
        .status(200)
        .send({ error: 'Invalid email or password', success: false });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Gdz4K5C5QQYmnuN5');
    }
  }

  async sd_SwRM8plApCGbtGZ3(bh) {
    try {
      bh.local.userDocs.forEach((userDoc) => {
        bh.local.userDocData = userDoc.data();
        bh.local.userDocData.id = userDoc.id;
      });

      bh = await this.sd_n5PAppLpNzpJvZog(bh);
      //appendnew_next_sd_SwRM8plApCGbtGZ3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SwRM8plApCGbtGZ3');
    }
  }

  async sd_n5PAppLpNzpJvZog(bh) {
    try {
      bh.web.res
        .status(200)
        .send({ success: true, userDocData: bh.local.userDocData });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_n5PAppLpNzpJvZog');
    }
  }

  async sd_tVoN2L8SfVNxnCty(bh) {
    try {
      bh.web.res
        .status(200)
        .send({ error: 'Invalid email or password', success: false });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tVoN2L8SfVNxnCty');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_TKGC1KAqz4dHO9pO(bh))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_TKGC1KAqz4dHO9pO(bh) {
    const catchConnectedNodes = ['sd_yviq2OPBSHrnXv94', 'sd_hFFE5x4kHRMAUsBq'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_yviq2OPBSHrnXv94(bh);
    //appendnew_next_sd_TKGC1KAqz4dHO9pO
    return true;
  }
  //appendnew_flow_vendors_Catch

  firebaseInitializationFunction() {
    readFile(
      'assets\\vj-labour-onboarding-firebase-adminsdk-mgu4s-873c238c22.json',
      'utf8',
      (err, jsonString) => {
        if (err) {
          console.log('Service Account file read failed:', err);
          return;
        }

        const serviceAccount = JSON.parse(jsonString);
        let app = initializeApp({
          credential: cert(serviceAccount),
        });
        this.firestoreDb = getFirestore(app);
        this.firebaseAuth = getAuth(app);
        this.firebaseClientAuth = clientGetAuth(
          clientInitializeApp({
            apiKey: 'AIzaSyA8yl-q-sgS-TU7XgkOYtXTiw6wBtFqDWw',
            authDomain: 'vj-labour-onboarding.firebaseapp.com',
            projectId: 'vj-labour-onboarding',
            storageBucket: 'vj-labour-onboarding.appspot.com',
            messagingSenderId: '1006675202027',
            appId: '1:1006675202027:web:7494a83879b5d0b074d3ae',
            measurementId: 'G-GQYWHQNY42',
          })
        );
      }
    );
  }
}
