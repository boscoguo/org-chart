import JSONDigger from './jsonDiggerUtils';

describe('JSONDigger', () => {

  let datasource:any, digger:any;
  const idErrMsg = 'Parameter id is invalid.';
  const dataErrMsg = 'Parameter data is invalid.';

  beforeEach(() => {
    datasource = {
      pk: '1',
      name: 'Lao Lao',
      title: 'general manager',
      isShareholder: true,
      birthYear: 1940,
      inferiors: [
        { pk: '2', name: 'Bo Miao', title: 'department manager', isShareholder: true, birthYear: 1960,
          inferiors: [
            { pk: '10', name: 'Ren Wu', title: 'principle engineer', isShareholder: false, birthYear: 1960 }
          ]
        },
        {
          pk: '3',
          name: 'Su Miao',
          title: 'department manager',
          isShareholder: true,
          birthYear: 1961,
          inferiors: [
            { pk: '4', name: 'Tie Hua', title: 'principle engineer', isShareholder: false, birthYear: 1961 },
            {
              pk: '5',
              name: 'Hei Hei',
              title: 'senior engineer',
              isShareholder: false,
              birthYear: 1980,
              inferiors: [
                { pk: '6', name: 'Pang Pang', title: 'UE engineer', isShareholder: false, birthYear: 1984 },
                { pk: '7', name: 'Xiang Xiang', title: 'QA engineer', isShareholder: false, birthYear: 2014 }
              ]
            }
          ]
        },
        { pk: '8', name: 'Hong Miao', title: 'department manager', isShareholder: true, birthYear: 1962 },
        { pk: '9', name: 'Chun Miao', title: 'department manager', isShareholder: true, birthYear: 1963 }
      ]
    };
    digger = new JSONDigger(datasource, 'pk', 'inferiors');
  });

  describe('#findNodeById()', () => {

    // test('when the node with given id exist', () => {
      it('should return node "Lao Lao" when id is "1"', async () => {
        const node = await digger.findNodeById('1');
        // node.name.should.equal('Lao Lao');
        expect(node.name).toEqual('Lao Lao');
      });
      it('should return node "Tie Hua" when id is "4"', async () => {
        const node = await digger.findNodeById('4');
        // node.name.should.equal('Tie Hua');
        expect(node.name).toEqual('Tie Hua');
      });
      it('should return node "Pang Pang" when id is "6"', async () => {
        const node = await digger.findNodeById('6');
        // node.name.should.equal('Pang Pang');
        expect(node.name).toEqual('Pang Pang')
      });
    // });

    // test('when the node with given id doesn\'t exist', () => {
      it('should throw an error', async () => {
        try {
          await digger.findNodeById('11');
        } catch (err) {
          // err.message.should.equal('The node doesn\'t exist.');
          expect(err.message).toEqual('The node doesn\'t exist.');
        }
      });
    // });

    // test('when users don\'t provide valid parameters', () => {
      it('should throw an error when id is invalid', async () => {
        try {
          await digger.findNodeById(null);
        } catch (err) {
          // err.message.should.equal(idErrMsg);
          expect(err.message).toEqual(idErrMsg);
        }

        try {
          await digger.findNodeById(undefined);
        } catch (err) {
          // err.message.should.equal(idErrMsg);
          expect(err.message).toEqual(idErrMsg);
        }

        try {
          await digger.findNodeById('');
        } catch (err) {
          // err.message.should.equal(idErrMsg);
          expect(err.message).toEqual(idErrMsg);
        }
      });
    // });

  });

  
  describe('#findParent()', () => {

    // test('when the parent node exists', () => {
      it('should return node "Su Miao" when id is "4"', async () => {
        const node = await digger.findParent('4');
        // node.name.should.equal('Su Miao');
        expect(node.name).toEqual('Su Miao');
      });
      it('should return node "Hei Hei" when id is "7"', async () => {
        const node = await digger.findParent('7');
        // node.name.should.equal('Hei Hei');
        expect(node.name).toEqual('Hei Hei');
      });
    // });

    // test('when the parent node doesn\'t exist', () => {
      const errMessage = 'The parent node doesn\'t exist.';

      it('should throw an error', async () => {
        try {
          await digger.findParent('1');
        } catch (err) {
          expect(err.message).toEqual(errMessage);
        }

        try {
          await digger.findParent('11');
        } catch (err) {
          // err.message.should.equal(errMessage);
          expect(err.message).toEqual(errMessage);
        }
      });
    // });

    // test('when users don\'t provide valid parameters', () => {
      it('should throw an error when id is invalid', async () => {
        try {
          await digger.findParent(null);
        } catch (err) {
          // err.message.should.equal(idErrMsg);
          expect(err.message).toEqual(idErrMsg);
        }

        try {
          await digger.findParent(undefined);
        } catch (err) {
          // err.message.should.equal(idErrMsg);
          expect(err.message).toEqual(idErrMsg);
        }

        try {
          await digger.findParent('');
        } catch (err) {
          // err.message.should.equal(idErrMsg);
          expect(err.message).toEqual(idErrMsg);
        }
      });
    // });

  });

  
  describe('#addReports()', () => {
      it('could add child node to root node when adding single node', async () => {
        await digger.addReports('1', { pk: '11', name: 'Yu Jie' });
        expect(datasource.inferiors.some((item:any) => item.name === 'Yu Jie')).toBeTruthy();
      });

      it('could add child node to middle level node when adding single node', async () => {
        await digger.addReports('5', { pk: '11', name: 'Dan Dan' });
        expect(datasource.inferiors[1].inferiors[1].inferiors.some((item:any) => item.name === 'Dan Dan')).toBeTruthy();
      });

      it('could add child node to leaf node when adding single node', async () => {
        await digger.addReports('10', { pk: '11', name: 'Fei Xuan' });
        expect(datasource.inferiors[0].inferiors[0].inferiors.some((item:any) => item.name === 'Fei Xuan')).toBeTruthy();
      });

      it('could add child nodes to root node when adding multiple nodes', async () => {
        await digger.addReports('1', [{ pk: '11', name: 'Yu Jie' }, { pk: '12', name: 'Yu Li' }]);
        expect(datasource.inferiors.some((item:any) => item.name === 'Yu Jie')).toBeTruthy();
        expect(datasource.inferiors.some((item:any)=> item.name === 'Yu Li')).toBeTruthy();
      });

      it('could add child nodes to middle level node when adding multiple nodes', async () => {
        await digger.addReports('5', [{ pk: '11', name: 'Dan Dan' }, { pk: '12', name: 'Er Dan' }]);
        expect(datasource.inferiors[1].inferiors[1].inferiors.some((item:any) => item.name === 'Dan Dan')).toBeTruthy();
        expect(datasource.inferiors[1].inferiors[1].inferiors.some((item:any) => item.name === 'Er Dan')).toBeTruthy();
      });

      it('could add child nodes to leaf node when adding multiple nodes', async () => {
        await digger.addReports('10', [{ pk: '11', name: 'Fei Xuan' }, { pk: '12', name: 'Er Xuan' }]);
        expect(datasource.inferiors[0].inferiors[0].inferiors.some((item:any) => item.name === 'Fei Xuan')).toBeTruthy();
        expect(datasource.inferiors[0].inferiors[0].inferiors.some((item:any) => item.name === 'Er Xuan')).toBeTruthy();
      });

      it('should throw an error when id is invalid if users don\'t provide valid parameters', async () => {
        try {
          await digger.addReports(null);
        } catch (err) {
          expect(err.message).toEqual(idErrMsg);
        }

        try {
          await digger.addReports(undefined);
        } catch (err) {
          expect(err.message).toEqual(idErrMsg);
        }

        try {
          await digger.addReports('');
        } catch (err) {
          expect(err.message).toEqual(idErrMsg);
        }
      });

      it('should throw an error when data is invalid if users don\'t provide valid parameters', async () => {
        try {
          await digger.addReports('1');
        } catch (err) {
          expect(err.message).toEqual(dataErrMsg);
        }

        try {
          await digger.addReports('1', 1);
        } catch (err) {
          expect(err.message).toEqual(dataErrMsg);
        }

        try {
          await digger.addReports('1', 'xx');
        } catch (err) {
          expect(err.message).toEqual(dataErrMsg);
        }

        try {
          await digger.addReports('1', null);
        } catch (err) {
          expect(err.message).toEqual(dataErrMsg);
        }

        try {
          await digger.addReports('1', undefined);
        } catch (err) {
          expect(err.message).toEqual(dataErrMsg);
        }

        try {
          await digger.addReports('1', {});
        } catch (err) {
          expect(err.message).toEqual(dataErrMsg);
        }

        try {
          await digger.addReports('1', []);
        } catch (err) {
          expect(err.message).toEqual(dataErrMsg);
        }

        try {
          await digger.addReports('1', [1]);
        } catch (err) {
          expect(err.message).toEqual(dataErrMsg);
        }

        try {
          await digger.addReports('1', ['xx']);
        } catch (err) {
          expect(err.message).toEqual(dataErrMsg);
        }

        try {
          await digger.addReports('1', [null]);
        } catch (err) {
          expect(err.message).toEqual(dataErrMsg);
        }

        try {
          await digger.addReports('1', [undefined]);
        } catch (err) {
          expect(err.message).toEqual(dataErrMsg);
        }

        try {
          await digger.addReports('1', [{}]);
        } catch (err) {
          expect(err.message).toEqual(dataErrMsg);
        }
      });

      it('should throw an error when parent node can\'t be found if users don\'t provide valid parameters', async () => {
        try {
          await digger.addReports('11', { id: '11', name: 'Yu Jie' });
        } catch (err) {
          expect(err.message).toEqual('Failed to add child nodes.');
        }
      });
  });
  
});