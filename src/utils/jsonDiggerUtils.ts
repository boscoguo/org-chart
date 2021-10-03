export default class JSONDigger {
  ds: any
  id: string
  reports: any
  count: number
  constructor(datasource: any, idProp: string, reportsProp: any) {
    this.ds = datasource;
    this.id = idProp;
    this.reports = reportsProp;
    this.count = 0;
  }

  countNodes(obj: any) {
    var _this = this;
    this.count++;
    if (!obj || !Object.keys(obj).length) {
      return false;
    } else {
      if (obj[this.reports]) {
        obj[this.reports].forEach((child: any) => {
          _this.countNodes(child);
        });
      }
    }
  }

  findNodeById(id: string) {
    const _this = this;
    this.countNodes(this.ds);
    return new Promise((resolve, reject) => {
      if (!id) {
        return reject(new Error('Parameter id is invalid.'));
      }
      function findNodeById(obj: any, id: string, callback: Function) {
        if (!_this.count) {
          return;
        }
        if (obj[_this.id] === id) {
          _this.count = 0;
          callback(null, obj);
        } else {
          if (_this.count === 1) {
            _this.count = 0;
            callback('The node doesn\'t exist.', null);
          }
          _this.count--;
          if (obj[_this.reports]) {
            obj[_this.reports].forEach((node: HTMLElement) => {
              findNodeById(node, id, callback);
            });
          }
        }
      }
      findNodeById(this.ds, id, (msg: string, node: HTMLElement) => {
        if (msg) {
          reject(new Error(msg));
        } else {
          resolve(node);
        }
      });
    });
  }

  findParent(id: string) {
    const _this = this;
    this.countNodes(this.ds);
    return new Promise((resolve, reject) => {
      if (!id) {
        return reject(new Error('Parameter id is invalid.'));
      }
      function findParent(obj: any, id: string, callback: Function) {
        if (_this.count === 1) {
          _this.count = 0;
          callback('The parent node doesn\'t exist.', null);
        } else {
          _this.count--;
          if (typeof obj[_this.reports] !== 'undefined') {
            obj[_this.reports].forEach(function (child: any) {
              if (child[_this.id] === id) {
                _this.count = 0;
                callback(null, obj);
              }
            });
            obj[_this.reports].forEach(function (child: any) {
              findParent(child, id, callback);
            });
          }
        }
      }
      findParent(this.ds, id, (msg: any, parent: any) => {
        if (msg) {
          reject(new Error(msg));
        } else {
          resolve(parent);
        }
      });
    });
  }

  // validate the input parameters id and data(could be oject or array)
  validateParams(id: string, data: any) {
    if (!id) {
      throw new Error('Parameter id is invalid.');
    }
    if (!data
      || (data.constructor !== Object && data.constructor !== Array)
      || (data.constructor === Object && !Object.keys(data).length)
      || (data.constructor === Array && !data.length)
      || (data.constructor === Array && data.length && !data.every(item => item && item.constructor === Object && Object.keys(item).length))) {
      throw new Error('Parameter data is invalid.');
    }
  }

  async addReports(id: string, data: any) {
    this.validateParams(id, data);
    try {
      const parent : any[] | any = await this.findNodeById(id);
      if (data.constructor === Object) {
        if (parent[this.reports]) {
          parent[this.reports].push(data);
        } else {
          parent[this.reports] = [data];
        }
      } else {
        if (parent[this.reports]) {
          parent[this.reports].push(...data);
        } else {
          parent[this.reports] = data;
        }
      }
    } catch (err) {
      throw new Error('Failed to add child nodes.');
    }
  }

  // remove single node based on id
  async removeNode(id: string) {
    const _this = this;
    if (id === this.ds[this.id]) {
      throw new Error('Input parameter is invalid.');
    }
    const parent:any[] | any = await this.findParent(id);
    const index = parent[this.reports].map((node:any) => node[_this.id]).indexOf(id);
    parent[this.reports].splice(index, 1);
    this.count = 0;
  }

};