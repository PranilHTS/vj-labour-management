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
import { getFirestore, Timestamp } from 'firebase-admin/firestore'; //_splitter_
import { getAuth } from 'firebase-admin/auth'; //_splitter_
import { initializeApp as clientInitializeApp } from 'firebase/app'; //_splitter_
import {
  getAuth as clientGetAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth'; //_splitter_
import { getStorage } from 'firebase-admin/storage'; //_splitter_
import {
  getFirestore as clientgetFirestore,
  getCountFromServer,collection,where,query as firebaseQuery,QueryConstraint,getDocs
} from 'firebase/firestore'; //_splitter_
import { XMLService } from '../utils/ndefault-xml/XML/XMLService'; //_splitter_
import * as stream from 'stream';
//append_imports_end
export class vendors {
  public firestoreDb: any;
  public firebaseAuth: any;
  public firebaseClientAuth: any;
  public firebaseStorage: any;
  public clientFirestoreDB: any;
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

    this.app['post'](
      `${this.serviceBasePath}/blockOrUnblockUser`,
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
          bh = await this.sd_GRAMNdDqLIbyCtQi(bh);
          //appendnew_next_sd_x7D87XwOyZ6vbMcI
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_x7D87XwOyZ6vbMcI');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/getByDocId`,
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
          bh = await this.sd_Sfdiup4uMWgFH1V8(bh);
          //appendnew_next_sd_z4NUWkTXYfwICObQ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_z4NUWkTXYfwICObQ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/getStorageFile`,
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
          bh = await this.sd_oTQfJCWJSNBQozFT(bh);
          //appendnew_next_sd_jBWp4UsWMU6NKPwG
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_jBWp4UsWMU6NKPwG');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/getByCount`,
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
          bh = await this.sd_GwrrBu3nbQbjFz64(bh);
          //appendnew_next_sd_eQu7hV2QRjin7mde
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_eQu7hV2QRjin7mde');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/uploadImage`,
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
          bh = await this.sd_HQANtoC97vpeexnW(bh);
          //appendnew_next_sd_ybudBEAHnZ6reLNY
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ybudBEAHnZ6reLNY');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/getByRef`,
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
          bh = await this.sd_SIysupcL36yQYES5(bh);
          //appendnew_next_sd_GtNPG6wReHoGK2mp
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_GtNPG6wReHoGK2mp');
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
      bh = await this.sd_uM7KmXJ27WbbRZKO(bh);
      //appendnew_next_sd_SZnwPyYJ0SNiNzDi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SZnwPyYJ0SNiNzDi');
    }
  }

  async sd_uM7KmXJ27WbbRZKO(bh) {
    try {
      //appendnew_next_sd_uM7KmXJ27WbbRZKO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uM7KmXJ27WbbRZKO');
    }
  }

  async sd_npVueYySnG3qNfeN(bh) {
    try {
      let query = this.firestoreDb.collection(bh.input.body.collectionName);
      if (bh.input.body.filter) {
        for (let i = 0; i < bh.input.body.filter.length; i++) {
          let operator = bh.input.body.filter[i].operator
            ? bh.input.body.filter[i].operator
            : '==';
          query = query.where(
            bh.input.body.filter[i].field,
            operator,
            bh.input.body.filter[i].value
          );
        }
      }
      if (bh.input.body.search && bh.input.body.search.fieldName) {
        query = query.where(
          bh.input.body.search.fieldName,
          '>=',
          bh.input.body.search.searchText
        );
        query = query.where(
          bh.input.body.search.fieldName,
          '<=',
          bh.input.body.search.searchText + '\uf8ff'
        );
      } else if (bh.input.body.sort) {
        for (let i = 0; i < bh.input.body.sort.length; i++) {
          let direction = bh.input.body.sort[i].direction
            ? bh.input.body.sort[i].direction
            : 'asc';
          query = query.orderBy(bh.input.body.sort[i].field, direction);
        }
      }
      if (bh.input.body.lastDoc) {
        if (bh.input.body.lastDoc._seconds) {
          bh.input.body.lastDoc = new Timestamp(
            bh.input.body.lastDoc._seconds,
            bh.input.body.lastDoc._nanoseconds
          );
        }
        query = query.startAfter(bh.input.body.lastDoc);
      } else if (bh.input.body.endBefore) {
        if (bh.input.body.endBefore._seconds) {
          bh.input.body.endBefore = new Timestamp(
            bh.input.body.endBefore._seconds,
            bh.input.body.endBefore._nanoseconds
          );
        }
        query = query.endBefore(bh.input.body.endBefore);
      }
      if (bh.input.body.limit) {
        query = query.limit(bh.input.body.limit);
      }

      let data;
      data = await query.get();

      let dataArray = [];
      data.forEach((firebaseDoc) => {
        let firebaseData = firebaseDoc.data();
        if (firebaseData.startTime) {
          firebaseData.startTime = firebaseData.startTime.toDate();
          firebaseData.endTime = firebaseData.endTime.toDate();
          console.log(firebaseData.startTime);
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
      if (bh.input.body.length) {
        bh.input.response = [];
        for (let i = 0; i < bh.input.body.length; i++) {
          if (bh.input.body[i].dateKeys) {
            for (let j = 0; j < bh.input.body[i].dateKeys.length; j++) {
              bh.input.body[i].data[bh.input.body[i].dateKeys[j]] = new Date(
                bh.input.body[i].data[bh.input.body[i].dateKeys[j]]
              );
            }
          }
          let response = await this.firestoreDb
            .collection(bh.input.body[i].collectionName)
            .doc(bh.input.body[i].id)
            .update(bh.input.body[i].data);
          bh.input.response.push(response);
        }
      } else {
        bh.input.response = await this.firestoreDb
          .collection(bh.input.body.collectionName)
          .doc(bh.input.body.id)
          .update(bh.input.body.data);
      }

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
      <FromDateTime>${query.fromDate}</FromDateTime>
      <ToDateTime>${query.toDate}</ToDateTime>
      <SerialNumber>${query.serialNumber}</SerialNumber>
      <UserName>ApiUser</UserName>
      <UserPassword>Api@1234</UserPassword>
      <strDataList>1</strDataList>
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
        url: 'http://103.186.18.61:8526/iclock/WebAPIService.asmx',
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
      let allEmployeeDayTransactions = [];
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
          allEmployeeDayTransactions = [];
        }
        if (currentEmployeeId !== processingEmployeeId) {
          resultObj[processingEmployeeId].push({
            startTime: dateObjStartTime,
            endTime: dateObjEndTime,
            date: processingDate,
            allEmployeeDayTransactions,
          });
          processingEmployeeId = currentEmployeeId;
          processingDate = currentDate;
          dateObjStartTime = currentTime;
          dateObjEndTime = currentTime;
          allEmployeeDayTransactions = [];
          resultObj[processingEmployeeId] = [];
        }
        if (
          currentEmployeeId == processingEmployeeId &&
          processingDate == currentDate
        ) {
          allEmployeeDayTransactions.push(currentTime);
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
            allEmployeeDayTransactions,
          });
          processingDate = currentDate;
          dateObjStartTime = currentTime;
          dateObjEndTime = currentTime;
          allEmployeeDayTransactions = [currentTime];
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
      let firebaseData;
      let latestEmployeeSnapShots = await this.firestoreDb
        .collection('users')
        .orderBy('runningId', 'desc')
        .limit(1)
        .get();
      latestEmployeeSnapShots.forEach((firebaseDoc) => {
        firebaseData = firebaseDoc.data();
        firebaseData.id = firebaseDoc.id;
      });
      bh.local.employeeCode = 'VJ' + firebaseData.runningId + 1;
      bh.local.runningId = firebaseData.runningId + 1;
      bh.local.body = `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <AddEmployee xmlns="http://tempuri.org/">
      <APIKey>string</APIKey>
      <EmployeeCode>${bh.local.employeeCode}</EmployeeCode>
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
        url: 'http://103.186.18.61:8526/webapiservice.asmx?',
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
      bh = await this.sd_VrzY4hYqerY7T3xb(bh);
      //appendnew_next_sd_v5VQcm1sHdynIu0k
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_v5VQcm1sHdynIu0k');
    }
  }

  async sd_VrzY4hYqerY7T3xb(bh) {
    try {
      let response = await this.firestoreDb
        .collection('users')
        .doc(bh.input.body.id)
        .update({
          employeeCode: bh.local.employeeCode,
          runningId: bh.local.runningId,
        });
      bh = await this.sd_yygTbYCYYXkmVuRb(bh);
      //appendnew_next_sd_VrzY4hYqerY7T3xb
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VrzY4hYqerY7T3xb');
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
          bh.input.body.data[i].startTime = new Date(
            bh.input.body.data[i].startTime
          );
          bh.input.body.data[i].endTime = new Date(
            bh.input.body.data[i].endTime
          );
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
        phoneNumber: '+91' + data.mobile,
        password: data.password,
        name: data.name,
      });
      bh.local.writeResult = this.firestoreDb
        .collection('AdminUsers')
        .doc(userRecord.uid)
        .set(data);
      bh = await this.sd_CaLITEAdz7WxZrk3(bh);
      //appendnew_next_sd_881w0U6YPdipP6XH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_881w0U6YPdipP6XH');
    }
  }

  async sd_CaLITEAdz7WxZrk3(bh) {
    try {
      bh.web.res.status(200).send(bh.local.writeResult);

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

  async sd_GRAMNdDqLIbyCtQi(bh) {
    try {
      let updateStatus = await this.firebaseAuth.updateUser(
        bh.input.body.uid,
        bh.input.body.data
      );
      bh.local.response = {
        success: true,
        message: 'User ' + bh.input.body.uid + ' status successfully changed.',
        updateStatus,
      };
      bh = await this.sd_opzUhULwvTew3rMf(bh);
      //appendnew_next_sd_GRAMNdDqLIbyCtQi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GRAMNdDqLIbyCtQi');
    }
  }

  async sd_opzUhULwvTew3rMf(bh) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_opzUhULwvTew3rMf');
    }
  }

  async sd_Sfdiup4uMWgFH1V8(bh) {
    try {
      bh.input.response = await this.firestoreDb
        .collection(bh.input.body.collectionName)
        .doc(bh.input.body.id)
        .get();
      bh.local.dataToSend = bh.input.response.data();
      bh.local.dataToSend.id = bh.input.response.id;
      bh = await this.sd_lNumd3AHqt6QNEOF(bh);
      //appendnew_next_sd_Sfdiup4uMWgFH1V8
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Sfdiup4uMWgFH1V8');
    }
  }

  async sd_lNumd3AHqt6QNEOF(bh) {
    try {
      bh.web.res.status(200).send(bh.local.dataToSend);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lNumd3AHqt6QNEOF');
    }
  }

  async sd_oTQfJCWJSNBQozFT(bh) {
    try {
      await this.firebaseStorage
        .bucket('vj-labour-onboarding.appspot.com')
        .file(bh.input.body.fileName)
        .makePublic();
      let url = await this.firebaseStorage
        .bucket()
        .file(bh.input.body.fileName)
        .publicUrl();
      bh.input.response = { url };
      bh = await this.sd_gPYAJEOtr2TuzSBR(bh);
      //appendnew_next_sd_oTQfJCWJSNBQozFT
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oTQfJCWJSNBQozFT');
    }
  }

  async sd_gPYAJEOtr2TuzSBR(bh) {
    try {
      bh.web.res.status(200).send(bh.input.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gPYAJEOtr2TuzSBR');
    }
  }

  async sd_GwrrBu3nbQbjFz64(bh) {
    try {
      bh.local.count = [];
      for (let i = 0; i < bh.input.body.length; i++) {
        let queryConstraint: QueryConstraint[] = [];

        if (bh.input.body[i].filter && bh.input.body[i].filter.length > 0) {
          let operator = bh.input.body[i].filter[0].operator
            ? bh.input.body[i].filter[0].operator
            : '==';
          queryConstraint.push(
            where(
              bh.input.body[i].filter[0].field,
              operator,
              bh.input.body[i].filter[0].value
            )
          );
          console.log(
            bh.input.body[i].filter[0].field,
            operator,
            bh.input.body[i].filter[0].value
          );
          for (let j = 1; j < bh.input.body[i].filter.length; j++) {
            let operator = bh.input.body[i].filter[j].operator
              ? bh.input.body[i].filter[j].operator
              : '==';
            queryConstraint.push(
              where(
                bh.input.body[i].filter[j].field,
                operator,
                bh.input.body[i].filter[j].value
              )
            );
            console.log(
              bh.input.body[i].filter[j].field,
              operator,
              bh.input.body[i].filter[j].value
            );
          }
        }
        let query;
        if (queryConstraint) {
          query = firebaseQuery(
            collection(this.clientFirestoreDB, bh.input.body[i].refString),
            ...queryConstraint
          );
        } else {
          query = collection(
            this.clientFirestoreDB,
            bh.input.body[i].refString
          );
        }

        let count = await getCountFromServer(query);
        bh.local.count.push(count);
        console.log(bh.local.count);
      }
      bh = await this.sd_h5rGpTaHayEFozfX(bh);
      //appendnew_next_sd_GwrrBu3nbQbjFz64
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GwrrBu3nbQbjFz64');
    }
  }

  async sd_h5rGpTaHayEFozfX(bh) {
    try {
      bh.web.res.status(200).send(bh.local.count);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_h5rGpTaHayEFozfX');
    }
  }

  async sd_HQANtoC97vpeexnW(bh) {
    try {
      var bufferStream = new stream.PassThrough();
      bufferStream.end(Buffer.from(bh.input.body.base64Image, 'base64'));
      let bucket = await this.firebaseStorage.bucket(
        'vj-labour-onboarding.appspot.com'
      );
      var file = bucket.file(bh.input.body.fileName);

      await new Promise((resolve, reject) => {
        bufferStream
          .pipe(
            file.createWriteStream({
              metadata: {
                contentType: bh.input.body.fileType,
                metadata: {
                  custom: 'metadata',
                },
              },
              public: true,
              validation: 'md5',
            })
          )
          .on('error', function (err) {
            bh.local.message = { success: false, err };
            reject(false);
          })
          .on('finish', async () => {
            await bucket.file(bh.input.body.fileName).makePublic();
            let url = await bucket.file(bh.input.body.fileName).publicUrl();
            bh.local.message = { success: true, url };
            // The file upload is complete.
            resolve(true);
          });
      });

      bh = await this.sd_ZaJv7YACwwu4kapM(bh);
      //appendnew_next_sd_HQANtoC97vpeexnW
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HQANtoC97vpeexnW');
    }
  }

  async sd_ZaJv7YACwwu4kapM(bh) {
    try {
      bh.web.res.status(200).send(bh.local.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZaJv7YACwwu4kapM');
    }
  }

  async sd_SIysupcL36yQYES5(bh) {
    try {
      bh.local.overAllData = [];
      for (let i = 0; i < bh.input.body.length; i++) {
        let queryConstraint: QueryConstraint[] = [];

        if (bh.input.body[i].filter && bh.input.body[i].filter.length > 0) {
          let operator = bh.input.body[i].filter[0].operator
            ? bh.input.body[i].filter[0].operator
            : '==';
          queryConstraint.push(
            where(
              bh.input.body[i].filter[0].field,
              operator,
              bh.input.body[i].filter[0].value
            )
          );
          console.log(
            bh.input.body[i].filter[0].field,
            operator,
            bh.input.body[i].filter[0].value
          );
          for (let j = 1; j < bh.input.body[i].filter.length; j++) {
            let operator = bh.input.body[i].filter[j].operator
              ? bh.input.body[i].filter[j].operator
              : '==';
            queryConstraint.push(
              where(
                bh.input.body[i].filter[j].field,
                operator,
                bh.input.body[i].filter[j].value
              )
            );
            console.log(
              bh.input.body[i].filter[j].field,
              operator,
              bh.input.body[i].filter[j].value
            );
          }
        }
        let query;
        if (queryConstraint) {
          query = firebaseQuery(
            collection(this.clientFirestoreDB, bh.input.body[i].refString),
            ...queryConstraint
          );
        } else {
          query = collection(
            this.clientFirestoreDB,
            bh.input.body[i].refString
          );
        }

        let data;
        data = await getDocs(query);

        let dataArray = [];
        data.forEach((firebaseDoc) => {
          let firebaseData = firebaseDoc.data();
          if (firebaseData.startTime) {
            firebaseData.startTime = firebaseData.startTime.toDate();
            firebaseData.endTime = firebaseData.endTime.toDate();
            console.log(firebaseData.startTime);
          }
          firebaseData.id = firebaseDoc.id;
          dataArray.push(firebaseData);
        });
        bh.local.overAllData.push(dataArray);
      }
      bh = await this.sd_mjEbXq6vSdZ3HvWs(bh);
      //appendnew_next_sd_SIysupcL36yQYES5
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SIysupcL36yQYES5');
    }
  }

  async sd_mjEbXq6vSdZ3HvWs(bh) {
    try {
      bh.web.res.status(200).send(bh.local.overAllData);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mjEbXq6vSdZ3HvWs');
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
    const serviceAccount = {
      type: 'service_account',
      project_id: 'vj-labour-onboarding',
      private_key_id: '873c238c22506924e6c0b3bdbd02f4675637c19f',
      private_key:
        '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDeeR5ZaFKlFIq5\noSAurmWudNqyldv8nPlEfOdCNqQfpQkhDvL6P39aFooNgXO1XV1dPaGBWg+YJXUq\n17/aADjib9x+zphGjWC3+7pv+QOZQWpa3orl/0Ow9mmJL2opyncAIq+6hgm5UVPJ\n/LKrPk5QOSATpBbWloUTzvDyvBwlusUXFQ2VXlsrr1D524IYb2gkRJq2O8fB2TQd\n28TqlivDhG7fbSWE8J0ylU1PmFhugB4ybPgskXS1awzB0i1917UTCpZT/Ri60fx4\nZMIwKZ7SrhtPof0335M0hawhZdo8askp6Yrxw/c5Zy2dfY8J5K8hYqXsj5wHThim\na6GPRuZBAgMBAAECggEAPzG4ZT00/J9xKHmUYq43Q+79kGzxKDiOtd2k8zICPNrs\nVO+iJWOUEUsFvABhlcsHkkzHa67hbx50wc63OH2HqwqLX5nft2rBZoGi29uoIghq\n5ZUBb4Oq/sGACO/nACf61ZcEw77/VBy96EpXlj0EkdUoP2wE8L+g3ZeS6eB1PmHf\nZkDbYOwIyjkiO9ok75G9C563TXIytlkWzMndww1PDhVgKHIAOAGmGGVG4abxkQQF\nfuPOqQXwUO8SYVwfrpX/AGyAGML1CpBaStKXTCLVvBVe+FVAYHYPLSC3Hm7hqucw\nzv2cX4+pLMl78/cB9dfv1TL76e58EjB+piZkPOmAYQKBgQD/XZP5j8w5EOPeSzFc\n2b4aZwiKhSTlFO7aP8aldhyKphERQaCznS25Rsax442cVzkmXdHxwIDmQcNA/jSp\n9VryN2He2WZojQGtxxj/cBFcXxajIifE39WYBZle6M2ZkNqSnZ+4B4FrsBdjjdsh\nY9PSZ9n+geU5Y/rFu4UJXx4kCwKBgQDfBp6mNFWaQ0DFO8A/S1zAFDP9+34TSyv1\nPCJmPFOJMhJ38H+llXIqvcZ54gFzCv0rfxuNyBUMbppwVmSfcG0sKYABOaOXBSUP\ngGIQb920/WUmzLfRSxQ3pYS4mvlIWLY5+8DPw3rcjgFzL5uGqjhjh6jDLqzxbOqU\ngP/BLXCiYwKBgHhDCb0uC2+UlLvLjaO8p9qnS05xBb8c7J+8CUFDLo3dR4xo69Wq\n4C2xN0HveHF4YmG/LXA8yHen4Nxq20JvWjVX/6+DkscKIRBGA2/Ix2RJI9AP9cqx\n31WIzYH1AV6g6U7DDMUOQ9UDSQCJfflrmgYtAmzpn5o3i5IzjaOsN/WhAoGASqEC\ncYdNpcMfZ2BpIkTrknKwOyruszISUYt/z0ocgeo5d90IObZab6b1RU+1QHPK58Uu\nyTDMqk5Qa4rdPOT4AzEX3lEVRrG4Bwnkxq9INwob0PHsCKLg7wX59XQWOnlE8P4n\nNN6qvCbgoVSq7FMFb3izpix2Pos9q9fGvTOhXxUCgYA9/9RwyXZMFmOKhoXr2QId\n4x+xDVJZfA9DGQSKiBBWFYbkicXAIJ9qji4ZAUAOdDjT277RVUsoiMsS67OdDytY\nMdYatC5wcIONA3nO/0ypNByJ3E4PbAx5qojdq5tFwCTzufkn6Six6xKktLIEzMKM\nTLvEc+nIk7udEKOwbSZeEQ==\n-----END PRIVATE KEY-----\n',
      client_email:
        'firebase-adminsdk-mgu4s@vj-labour-onboarding.iam.gserviceaccount.com',
      client_id: '113425014157321564425',
      auth_uri: 'https://accounts.google.com/o/oauth2/auth',
      token_uri: 'https://oauth2.googleapis.com/token',
      auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
      client_x509_cert_url:
        'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-mgu4s%40vj-labour-onboarding.iam.gserviceaccount.com',
    };
    let app = initializeApp({
      credential: cert(serviceAccount),
      storageBucket: serviceAccount.project_id + '.appspot.com',
    });
    this.firestoreDb = getFirestore(app);
    this.firebaseAuth = getAuth(app);
    let clientApp = clientInitializeApp({
      apiKey: 'AIzaSyA8yl-q-sgS-TU7XgkOYtXTiw6wBtFqDWw',
      authDomain: 'vj-labour-onboarding.firebaseapp.com',
      projectId: 'vj-labour-onboarding',
      storageBucket: 'vj-labour-onboarding.appspot.com',
      messagingSenderId: '1006675202027',
      appId: '1:1006675202027:web:7494a83879b5d0b074d3ae',
      measurementId: 'G-GQYWHQNY42',
    });
    this.firebaseClientAuth = clientGetAuth(clientApp);
    this.firebaseStorage = getStorage(app);
    this.clientFirestoreDB = clientgetFirestore(clientApp);
  }
}
