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
//append_imports_end
export class vendors {
  public firestoreDb: any;
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
      `${this.serviceBasePath}/getVendors`,
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
          bh = await this.sd_0qF8C9IXQ6LYRVR3(bh);
          //appendnew_next_sd_gP57Gc2EDeQmXA1w
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_gP57Gc2EDeQmXA1w');
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
      bh = await this.sd_yg8sHmwPWkL1FRBE(bh);
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

  async sd_yg8sHmwPWkL1FRBE(bh) {
    try {
      //appendnew_next_sd_yg8sHmwPWkL1FRBE
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yg8sHmwPWkL1FRBE');
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
      let data = await query.get();
      let dataArray = [];
      data.forEach((firebaseDoc) => {
        let firebaseData = firebaseDoc.data();
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
      bh.local.body = `
    <?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
    <GetTransactionsLog xmlns="http://tempuri.org/">
      <FromDate>2022-12-01</FromDate>
      <ToDate>2022-12-05</ToDate>
      <SerialNumber>CN4C222260084</SerialNumber>
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
        cookies: undefined,
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
      bh = await this.sd_sMqyjURBORA7QPaS(bh);
      //appendnew_next_sd_Tizw6FCQc8gA8YUD
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Tizw6FCQc8gA8YUD');
    }
  }

  async sd_sMqyjURBORA7QPaS(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sMqyjURBORA7QPaS');
    }
  }

  async sd_yviq2OPBSHrnXv94(bh) {
    try {
      console.log(bh.errorSource);
      //appendnew_next_sd_yviq2OPBSHrnXv94
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yviq2OPBSHrnXv94');
    }
  }

  async sd_RPHyvWHJNvx3f5S3(bh) {
    try {
      bh.local.userDoc = await this.firestoreDb
        .collection('AdminUsers')
        .where('email', '==', bh.input.body.email)
        .get();
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
          bh.local.userDoc,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_zbgHmSswhLzrXdSz(bh);
      } else if (
        this.sdService.operators['false'](
          bh.local.userDoc,
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
      bh.web.res.set({ 'Content-type': 'application/json' });

      bh.web.res
        .status(401)
        .send({ error: 'Invalid email or password', success: false });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zbgHmSswhLzrXdSz');
    }
  }

  async sd_uEwQIpdBBbfgFvOT(bh) {
    try {
      bh.local.userDocData = bh.local.userDoc.data();
      bh.local.userDocData.id = bh.local.userDoc.id;
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
          bh.local.userData.password,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_2D1QeJgwLmTWB1Gg(bh);
      } else if (
        this.sdService.operators['neq'](
          bh.input.body.password,
          bh.local.userData.password,
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
      bh.web.res.set({ 'Content-type': 'application/json' });

      bh.web.res.status(200).send({ success: true });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2D1QeJgwLmTWB1Gg');
    }
  }

  async sd_OzZT4VOg1ziIR1A7(bh) {
    try {
      bh.web.res.set({ 'Content-type': 'application/json' });

      bh.web.res
        .status(401)
        .send({ error: 'Invalid email or password', success: false });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OzZT4VOg1ziIR1A7');
    }
  }

  async sd_0qF8C9IXQ6LYRVR3(bh) {
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

      bh = await this.sd_WzkhjuHSctClWizL(bh);
      //appendnew_next_sd_0qF8C9IXQ6LYRVR3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0qF8C9IXQ6LYRVR3');
    }
  }

  async sd_WzkhjuHSctClWizL(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isBodyCorrect,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_12zKUFgts9zGGTML(bh);
      } else if (
        this.sdService.operators['false'](
          bh.local.isBodyCorrect,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_XiQZIrzeGFFvlu3w(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WzkhjuHSctClWizL');
    }
  }

  async sd_12zKUFgts9zGGTML(bh) {
    try {
      bh.local.addResult = await this.firestoreDb
        .collection('AdminUsers')
        .add(bh.input.body);
      bh = await this.sd_IBtxjti2D2UpLyta(bh);
      //appendnew_next_sd_12zKUFgts9zGGTML
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_12zKUFgts9zGGTML');
    }
  }

  async sd_IBtxjti2D2UpLyta(bh) {
    try {
      bh.web.res.status(200).send(bh.local.addResult);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IBtxjti2D2UpLyta');
    }
  }

  async sd_XiQZIrzeGFFvlu3w(bh) {
    try {
      bh.web.res
        .status(401)
        .send({
          success: false,
          message: 'Body does not have the right information',
        });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XiQZIrzeGFFvlu3w');
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
        .status(401)
        .send({
          success: false,
          message: 'Body does not have the right information',
        });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vXAvws09sbaB07zQ');
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
    const catchConnectedNodes = ['sd_yviq2OPBSHrnXv94'];
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
      'assets/vj-labour-onboarding-firebase-adminsdk-mgu4s-873c238c22.json',
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
      }
    );
  }
}
