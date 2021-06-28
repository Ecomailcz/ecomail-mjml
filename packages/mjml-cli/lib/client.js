'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

var _fp = require('lodash/fp');

var _lodash = require('lodash');

var _mjmlEcmCore = require('mjml-ecm-core');

var _mjmlEcmCore2 = _interopRequireDefault(_mjmlEcmCore);

var _mjmlEcmMigrate = require('mjml-ecm-migrate');

var _mjmlEcmMigrate2 = _interopRequireDefault(_mjmlEcmMigrate);

var _mjmlEcmValidator = require('mjml-ecm-validator');

var _mjmlEcmValidator2 = _interopRequireDefault(_mjmlEcmValidator);

var _mjmlEcmParserXml = require('mjml-ecm-parser-xml');

var _mjmlEcmParserXml2 = _interopRequireDefault(_mjmlEcmParserXml);

var _readFile = require('./commands/readFile');

var _readFile2 = _interopRequireDefault(_readFile);

var _watchFiles = require('./commands/watchFiles');

var _watchFiles2 = _interopRequireDefault(_watchFiles);

var _readStream = require('./commands/readStream');

var _readStream2 = _interopRequireDefault(_readStream);

var _outputToFile = require('./commands/outputToFile');

var _outputToFile2 = _interopRequireDefault(_outputToFile);

var _outputToConsole = require('./commands/outputToConsole');

var _outputToConsole2 = _interopRequireDefault(_outputToConsole);

var _package = require('mjml-ecm-core/package.json');

var _package2 = require('../package.json');

var _defaultOptions = require('./helpers/defaultOptions');

var _defaultOptions2 = _interopRequireDefault(_defaultOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line import/first
exports.default = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var EXIT_CODE, KEEP_OPEN, error, pickArgs, argv, juiceOptions, minifyOptions, juicePreserveTags, fonts, filePath, config, inputArgs, outputArgs, inputOpt, outputOpt, inputFiles, inputs, convertedStream, failedStream, isInvalid, fullOutputPath;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          EXIT_CODE = 0;
          KEEP_OPEN = false;

          error = function error(msg) {
            console.error('\nCommand line error:'); // eslint-disable-line no-console
            console.error(msg); // eslint-disable-line no-console

            process.exit(1);
          };

          pickArgs = function pickArgs(args) {
            return (0, _fp.flow)((0, _fp.pick)(args), (0, _fp.pickBy)(function (e) {
              return (0, _fp.negate)(_fp.isNil)(e) && !((0, _lodash.isArray)(e) && (0, _lodash.isEmpty)(e));
            }));
          };

          argv = _yargs2.default.options({
            r: {
              alias: 'read',
              describe: 'Compile MJML File(s)',
              type: 'array'
            },
            m: {
              alias: 'migrate',
              describe: 'Migrate MJML3 File(s)',
              type: 'array'
            },
            v: {
              alias: 'validate',
              describe: 'Run validator on File(s)',
              type: 'array'
            },
            w: {
              alias: 'watch',
              type: 'array',
              describe: 'Watch and compile MJML File(s) when modified'
            },
            i: {
              alias: 'stdin',
              describe: 'Compiles MJML from input stream'
            },
            s: {
              alias: 'stdout',
              describe: 'Output HTML to stdout'
            },
            o: {
              alias: 'output',
              type: 'string',
              describe: 'Filename/Directory to output compiled files'
            },
            c: {
              alias: 'config',
              type: 'object',
              describe: 'Option to pass to mjml-ecm-core'
            },
            version: {
              alias: 'V'
            }
          }).help().version('mjml-ecm-core: ' + _package.version + '\nmjml-ecm-cli: ' + _package2.version).argv;
          juiceOptions = void 0;
          minifyOptions = void 0;
          juicePreserveTags = void 0;
          fonts = void 0;


          try {
            juiceOptions = argv.c && argv.c.juiceOptions && JSON.parse(argv.c.juiceOptions);
          } catch (e) {
            error('Failed to decode JSON for config.juiceOptions argument');
          }

          try {
            minifyOptions = argv.c && argv.c.minifyOptions && JSON.parse(argv.c.minifyOptions);
          } catch (e) {
            error('Failed to decode JSON for config.minifyOptions argument');
          }

          try {
            juicePreserveTags = argv.c && argv.c.juicePreserveTags && JSON.parse(argv.c.juicePreserveTags);
          } catch (e) {
            error('Failed to decode JSON for config.juicePreserveTags argument');
          }

          try {
            fonts = argv.c && argv.c.fonts && JSON.parse(argv.c.fonts);
          } catch (e) {
            error('Failed to decode JSON for config.fonts argument');
          }

          filePath = argv.c && argv.c.filePath;
          config = (0, _assign2.default)(_defaultOptions2.default, argv.c, fonts && { fonts: fonts }, minifyOptions && { minifyOptions: minifyOptions }, juiceOptions && { juiceOptions: juiceOptions }, juicePreserveTags && { juicePreserveTags: juicePreserveTags });
          inputArgs = pickArgs(['r', 'w', 'i', '_', 'm', 'v'])(argv);
          outputArgs = pickArgs(['o', 's'])(argv);
          [[(0, _keys2.default)(inputArgs).length === 0, 'No input argument received'], [(0, _keys2.default)(inputArgs).length > 1, 'Too many input arguments received'], [(0, _keys2.default)(outputArgs).length > 1, 'Too many output arguments received'], [argv.w && argv.w.length > 1 && !argv.o, 'Need an output option when watching files'], [argv.w && argv.w.length > 1 && argv.o && !(0, _outputToFile.isDirectory)(argv.o) && argv.o !== '', 'Need an output option when watching files']].forEach(function (v) {
            return v[0] ? error(v[1]) : null;
          });

          inputOpt = (0, _keys2.default)(inputArgs)[0];
          outputOpt = (0, _keys2.default)(outputArgs)[0] || 's';
          inputFiles = (0, _lodash.isArray)(inputArgs[inputOpt]) ? inputArgs[inputOpt] : [inputArgs[inputOpt]];
          inputs = [];
          _context.t0 = inputOpt;
          _context.next = _context.t0 === 'r' ? 25 : _context.t0 === 'v' ? 25 : _context.t0 === 'm' ? 25 : _context.t0 === '_' ? 25 : _context.t0 === 'w' ? 30 : _context.t0 === 'i' ? 33 : 39;
          break;

        case 25:
          (0, _readFile.flatMapPaths)(inputFiles).forEach(function (file) {
            inputs.push((0, _readFile2.default)(file));
          });

          if (inputs.length) {
            _context.next = 29;
            break;
          }

          error('No input files found');
          return _context.abrupt('return');

        case 29:
          return _context.abrupt('break', 40);

        case 30:
          (0, _watchFiles2.default)(inputFiles, argv);
          KEEP_OPEN = true;
          return _context.abrupt('break', 40);

        case 33:
          _context.t1 = inputs;
          _context.next = 36;
          return (0, _readStream2.default)();

        case 36:
          _context.t2 = _context.sent;

          _context.t1.push.call(_context.t1, _context.t2);

          return _context.abrupt('break', 40);

        case 39:
          error('Command line error: Incorrect input options');

        case 40:
          convertedStream = [];
          failedStream = [];


          inputs.forEach(function (i) {
            try {
              var compiled = void 0;
              switch (inputOpt) {
                case 'm':
                  // eslint-disable-line no-case-declarations
                  compiled = { html: (0, _mjmlEcmMigrate2.default)(i.mjml, { beautify: true }) };
                  break;
                case 'v':
                  // eslint-disable-line no-case-declarations
                  var mjmlJson = (0, _mjmlEcmParserXml2.default)(i.mjml, { components: _mjmlEcmCore.components });
                  compiled = {
                    errors: (0, _mjmlEcmValidator2.default)(mjmlJson, { components: _mjmlEcmCore.components, initializeType: _mjmlEcmCore.initializeType })
                  };
                  break;
                default:
                  compiled = (0, _mjmlEcmCore2.default)(i.mjml, (0, _extends3.default)({}, config, { filePath: filePath || i.file }));
              }

              convertedStream.push((0, _extends3.default)({}, i, { compiled: compiled }));
            } catch (e) {
              EXIT_CODE = 2;
              failedStream.push({ file: i.file, error: e });
            }
          });

          convertedStream.forEach(function (s) {
            if ((0, _lodash.get)(s, 'compiled.errors.length')) {
              console.error((0, _lodash.map)(s.compiled.errors, 'formattedMessage').join('\n')); // eslint-disable-line no-console
            }
          });

          failedStream.forEach(function (_ref2) {
            var error = _ref2.error,
                file = _ref2.file;

            // eslint-disable-line array-callback-return
            console.error('' + (file ? 'File: ' + file + '\n' : null) + error); // eslint-disable-line no-console

            if (config.stack) {
              console.error(error.stack); // eslint-disable-line no-console
            }
          });

          if (!(inputOpt === 'v')) {
            _context.next = 52;
            break;
          }

          isInvalid = failedStream.length || convertedStream.some(function (s) {
            return !!(0, _lodash.get)(s, 'compiled.errors.length');
          });

          if (!isInvalid) {
            _context.next = 50;
            break;
          }

          error('Validation failed');
          return _context.abrupt('return');

        case 50:
          process.exitCode = 0;
          return _context.abrupt('return');

        case 52:

          if (!KEEP_OPEN && convertedStream.length === 0) {
            error('Input file(s) failed to render');
          }

          _context.t3 = outputOpt;
          _context.next = _context.t3 === 'o' ? 56 : _context.t3 === 's' ? 61 : 63;
          break;

        case 56:
          if (inputs.length > 1 && !(0, _outputToFile.isDirectory)(argv.o) && argv.o !== '') {
            error('Multiple input files, but output option should be either an existing directory or an empty string: ' + argv.o + ' given');
          }

          fullOutputPath = _path2.default.parse(_path2.default.resolve(process.cwd(), argv.o));


          if (inputs.length === 1 && !(0, _outputToFile.isDirectory)(fullOutputPath.dir)) {
            error('Output directory doesn\u2019t exist for path : ' + argv.o);
          }

          _promise2.default.all(convertedStream.map((0, _outputToFile2.default)(argv.o))).then(function () {
            if (!KEEP_OPEN) {
              process.exitCode = EXIT_CODE;
            }
          }).catch(function (_ref3) {
            var outputName = _ref3.outputName,
                err = _ref3.err;

            if (!KEEP_OPEN) {
              error('Error writing file - ' + outputName + ' : ' + err);
            }
          });
          return _context.abrupt('break', 64);

        case 61:
          _promise2.default.all(convertedStream.map(_outputToConsole2.default)).then(function () {
            return process.exitCode = EXIT_CODE;
          }) // eslint-disable-line no-return-assign
          .catch(function () {
            return process.exitCode = 1;
          }); // eslint-disable-line no-return-assign
          return _context.abrupt('break', 64);

        case 63:
          error('Command line error: No output option available');

        case 64:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
}));
module.exports = exports['default'];