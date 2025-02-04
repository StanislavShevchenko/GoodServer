exports['__esModule'] = !![]
var ZoomSDK = (function() {
  if (!Object['assign']) {
    Object['defineProperty'](Object, 'assign', {
      enumerable: ![],
      configurable: !![],
      writable: !![],
      value: function(_0x29fab9) {
        if (_0x29fab9 === undefined || _0x29fab9 === null) {
          throw new TypeError('Cannot\x20convert\x20first\x20argument\x20to\x20object')
        }
        var _0x49156c = Object(_0x29fab9)
        for (var _0x2a84a7 = 0x1; _0x2a84a7 < arguments['length']; _0x2a84a7++) {
          var _0x3e15a9 = arguments[_0x2a84a7]
          if (_0x3e15a9 === undefined || _0x3e15a9 === null) {
            continue
          }
          _0x3e15a9 = Object(_0x3e15a9)
          var _0x1e75d7 = Object['keys'](Object(_0x3e15a9))
          for (var _0x41381e = 0x0, _0x128d65 = _0x1e75d7['length']; _0x41381e < _0x128d65; _0x41381e++) {
            var _0x3f76fc = _0x1e75d7[_0x41381e]
            var _0xc6b553 = Object['getOwnPropertyDescriptor'](_0x3e15a9, _0x3f76fc)
            if (_0xc6b553 !== undefined && _0xc6b553['enumerable']) {
              _0x49156c[_0x3f76fc] = _0x3e15a9[_0x3f76fc]
            }
          }
        }
        return _0x49156c
      }
    })
  }
  var _0x32f509 = {
    ZoomCustomization: {
      ovalCustomization: {
        strokeColor: '',
        progressColor1: '',
        progressColor2: '',
        progressStrokeWidth: 0x0,
        strokeWidth: 0x0
      },
      feedbackCustomization: { backgroundColor: '', textColor: '', textFont: '' },
      frameCustomization: { backgroundColor: '' },
      exitAnimationCustomization: { exitAnimationSuccess: 0x0, exitAnimationUnsuccess: 0x0 },
      cancelButtonCustomization: { location: 0x0 }
    },
    setCustomization: function() {},
    ZoomExitAnimationStyle: {},
    ZoomExitAnimationCustomization: {},
    ZoomCancelButtonLocation: {},
    ZoomCancelButtonCustomization: {},
    ZoomOvalCustomization: {},
    ZoomFeedbackCustomization: {},
    ZoomFrameCustomization: {}
  }
  var _0x1948d4 = {}
  _0x1948d4['ZoomCustomization'] = _0x32f509
  var _0x40f301 = { None: 0x0, FullResolution: 0x1 }
  var _0x3ffd37 = _0x40f301['None']
  var _0x36b693 = {
    MissingCameraObject: 'Missing\x20or\x20Invalid\x20Camera\x20Object.',
    ZoomSessionInProgress:
      'ZoOm\x20is\x20not\x20ready\x20to\x20capture.\x20\x20A\x20ZoOm\x20Session\x20could\x20already\x20be\x20in\x20progress.',
    CameraNotRunning: 'Selected\x20camera\x20is\x20not\x20active.',
    ZoomIsNotReady: 'Zoom\x20is\x20currently\x20busy.',
    SessionTimedOut: 'The\x20session\x20timed\x20out\x20before\x20completion.',
    FailedDueToInternalError: 'Session\x20failed\x20due\x20to\x20an\x20internal\x20error.',
    FailedDueToOSContextSwitch: 'Session\x20cancelled\x20due\x20to\x20Browser/OS\x20Context\x20Switch.',
    FailedDueToOrientationChange: 'Session\x20cancelled\x20due\x20to\x20Device\x20orientation\x20change.',
    DeviceInLandscapeMode:
      'ZoOm\x20session\x20did\x20not\x20start\x20because\x20user\x20is\x20in\x20landscape\x20mode\x20on\x20iOS.',
    NetworkingMissingInDevMode: 'A\x20network\x20connection\x20when\x20using\x20an\x20HTTPS\x20license.',
    UserCancelled: 'User\x20cancelled\x20the\x20session\x20before\x20completion.',
    CancelCalled: 'ZoomSession.cancel()\x20was\x20invoked\x20and\x20cancelled\x20the\x20session.',
    UserIsLockedOut: 'Zoom\x20is\x20in\x20lockout\x20state.',
    NetworkIssues: 'Zoom\x20failed\x20due\x20to\x20network\x20issues.',
    SessionCompleted: 'Session\x20captured\x20successfully.',
    PreloadIsNotComplete: 'Preload\x20was\x20never\x20completed.',
    CameraDoesNotExist: 'Camera\x20does\x20not\x20exist.',
    NeverValidated: 'Never\x20validated.',
    Initialized: 'Initialized.',
    NotPreloaded: 'ZoomSDK.preload()\x20must\x20be\x20ran\x20before\x20capturing\x20a\x20ZoOm\x20Session.',
    NotPrepared: 'ZoomSDK.prepare\x20must\x20be\x20ran\x20before\x20capturing\x20a\x20ZoOm\x20Session.',
    ZoomSessionCompleted: 'ZoOm\x20Session\x20Completed.',
    GetStatusNotInitialized:
      'ZoOm\x20is\x20not\x20properly\x20initialized.\x20\x20Please\x20call\x20ZoomSDK.getStatus()\x20for\x20more\x20information.'
  }
  var _0x2c1fdd = {
    Success: 'Preload\x20Completed\x20Successfully.',
    Error: 'An\x20error\x20was\x20encountered\x20preloading\x20ZoOm\x20resources.'
  }
  var _0x5561fe = ![]
  var _0x59f7bc = {
    Success: 'Prepare\x20Interface\x20Completed\x20Successfully.',
    NotPreloaded:
      'Cannot\x20prepare\x20ZoOm\x20interface\x20without\x20calling\x20ZoomSDK.preload()\x20first\x20and\x20waiting\x20for\x20ZoomSDK.preload()\x20to\x20successfully\x20complete.',
    ZoomVideoOrInterfaceDOMElementDoesNotExist:
      'Cannot\x20prepare\x20ZoOm\x20interface\x20because\x20one\x20of\x20the\x20element\x20IDs\x20passed\x20in\x20does\x20not\x20exist\x20on\x20the\x20DOM.',
    ZoomSessionInProgress: 'Cannot\x20prepare\x20ZoOm\x20interface\x20when\x20ZoOm\x20Session\x20is\x20in\x20progress.',
    DocumentNotReady: 'Cannot\x20prepare\x20ZoOm\x20interface\x20when\x20document\x20not\x20ready.',
    DeviceInLandscapeMode:
      'Cannot\x20prepare\x20ZoOm\x20interface\x20when\x20on\x20iOS\x20and\x20in\x20landscape\x20mode.\x20\x20Portrait\x20mode\x20is\x20required\x20on\x20iOS.',
    VideoHeightOrWidthZeroOrUninitialized:
      'Cannot\x20prepare\x20ZoOm\x20interface\x20because\x20the\x20video\x20height/width\x20was\x200.\x20The\x20camera\x20or\x20video\x20may\x20not\x20be\x20initialized.'
  }
  var _0x578c90 = {
    onZoomSessionComplete: function(_0x4684d4) {},
    onZoomSessionProcessingStarted: function(_0x13e7fc) {}
  }
  var _0x5986b4 = (function() {
    function _0x5986b4(_0x208d57, _0x2fa521) {
      this['onZoomSessionProcessingStarted'] = function() {}
      this['capture'] = this['captureZoomSession']
      this['cancel'] = function() {
        _0x1948d4['Zoom']['cancelZoomSession']('via_api')
      }
      this['setOnZoomSessionProcessingStarted'] = function(_0x5c82bb) {
        this['onZoomSessionProcessingStarted'] = _0x5c82bb
      }
      this['selectedTrack'] = _0x2fa521
      this['onZoomSessionComplete'] = _0x208d57
      if (!_0x208d57 || typeof _0x208d57 !== 'function') {
        console['log'](
          'ZoomSession\x20constructor\x20failed.\x20\x20Invalid\x20onZoomSessionComplete\x20callback\x20defined.'
        )
        return
      }
      this['capture'] = function() {
        this['captureZoomSession'](this['onZoomSessionComplete'], this['selectedTrack'])
      }
      _0x578c90['onZoomSessionComplete'] = _0x208d57
    }
    _0x5986b4['prototype']['setCaptureStatusAndReturnToDeveloper'] = function(_0x603940) {
      _0xdde3ce['status'] = _0x603940
      this['onZoomSessionComplete'](_0xdde3ce)
    }
    _0x5986b4['prototype']['captureZoomSession'] = function(_0x530eba, _0x377450) {
      if (!_0x530eba) {
        console['log'](
          'ZoOm\x20Error\x2012001:\x20onZoomSessionComplete\x20not\x20defined\x20or\x20missing\x20parameters.'
        )
        return
      }
      _0xdde3ce = {
        faceMetrics: { auditTrail: [] },
        facemap: null,
        sessionData: null,
        sessionId: '',
        status: _0x36b693['NeverValidated']
      }
      if (!_0x377450) {
        this['setCaptureStatusAndReturnToDeveloper'](_0x36b693['CameraDoesNotExist'])
        return
      }
      if (_0x377450['enabled'] !== !![]) {
        this['setCaptureStatusAndReturnToDeveloper'](_0x36b693['CameraNotRunning'])
        return
      }
      if (_0x1948d4['ZoomInterface']['isMobileDeviceInLandscapeMode']()) {
        this['setCaptureStatusAndReturnToDeveloper'](_0x36b693['DeviceInLandscapeMode'])
        return
      }
      if (ZoomSDK['ZoomInternal']['ZoomLockout']['isLockedOut']()) {
        this['setCaptureStatusAndReturnToDeveloper'](_0x36b693['UserIsLockedOut'])
        _0x939bf['appTokenValidationState'] = _0x4084d5['UserIsLockedOut']
        return
      }
      if (ZoomSDK['getStatus']() != _0x54ba0b['INITIALIZED']) {
        this['setCaptureStatusAndReturnToDeveloper'](_0x36b693['GetStatusNotInitialized'])
        return
      }
      if (!_0x5561fe) {
        this['setCaptureStatusAndReturnToDeveloper'](_0x36b693['NotPreloaded'])
        return
      }
      if (!ZoomSDK['ZoomInternal']['ZoomInterface']['isZoomInterfacePrepared']()) {
        this['setCaptureStatusAndReturnToDeveloper'](_0x36b693['NotPrepared'])
        return
      }
      if (!ZoomSDK['ZoomInternal']['State']['getIsZoomReadyForCapture']()) {
        this['setCaptureStatusAndReturnToDeveloper'](_0x36b693['ZoomSessionInProgress'])
        return
      }
      var _0x10c886 = _0x377450['getConstraints']()
      ZoomSDK['ZoomInternal']['PhWeb']['additionalMetaData']({ cameraConstraints: _0x10c886 })
      var _0x46fe03 = _0x377450['label']
      ZoomSDK['ZoomInternal']['Constants']['DEVICE_MODEL'] = _0x46fe03
      ZoomSDK['ZoomInternal']['State']['setStartingZoom']()
      ZoomSDK['ZoomInternal']['ZoomInterface']['setupZoomInterface']()
      ZoomSDK['ZoomInternal']['Zoom']['init']()
      _0x578c90['onZoomSessionProcessingStarted'] = this['onZoomSessionProcessingStarted']
      _0x578c90['onZoomSessionComplete'] = this['onZoomSessionComplete']
      if (_0x1948d4['validationUsedLicense']) {
        return
      }
      _0x4a29ca['sessionsThisInit']++
      ZoomSDK['ZoomInternal']['ZAPI']['sessionStart']('LivenessCheck', function() {})
    }
    return _0x5986b4
  })()
  _0x1948d4['zoomSession'] = _0x5986b4
  var _0x4084d5
  ;(function(_0x5bff86) {
    _0x5bff86[(_0x5bff86['NeverValidated'] = 0x0)] = 'NeverValidated'
    _0x5bff86[(_0x5bff86['ServerInvalidatedToken'] = 0x1)] = 'ServerInvalidatedToken'
    _0x5bff86[(_0x5bff86['NetworkError'] = 0x2)] = 'NetworkError'
    _0x5bff86[(_0x5bff86['InGracePeriod'] = 0x3)] = 'InGracePeriod'
    _0x5bff86[(_0x5bff86['VersionDeprecated'] = 0x4)] = 'VersionDeprecated'
    _0x5bff86[(_0x5bff86['UserIsLockedOut'] = 0x5)] = 'UserIsLockedOut'
    _0x5bff86[(_0x5bff86['Validated'] = 0x6)] = 'Validated'
    _0x5bff86[(_0x5bff86['Rejected'] = 0x7)] = 'Rejected'
  })(_0x4084d5 || (_0x4084d5 = {}))
  var _0x54ba0b = {
    NEVER_INITIALIZED: 'Initialize\x20was\x20never\x20attempted.',
    INITIALIZED: 'Initialized\x20successfully.',
    NETWORK_ISSUES: 'Initialize\x20failed\x20due\x20to\x20network\x20issues.',
    INVALID_TOKEN: 'Validation\x20of\x20your\x20App\x20Token\x20did\x20not\x20succeed.',
    VERSION_DEPRECATED: 'Current\x20version\x20of\x20SDK\x20is\x20deprecated.',
    OFFLINE_SESSIONS_EXCEEDED: 'The\x20App\x20Token\x20has\x20not\x20been\x20validated\x20recently.',
    DEVICE_NOT_SUPPORTED: 'The\x20system\x20is\x20incompatible\x20with\x20the\x20ZoOm\x20SDK.',
    DEVICE_IN_LANDSCAPE_MODE: 'The\x20device\x20is\x20in\x20landscape\x20mode.',
    CAMERA_NOT_RUNNING: 'Selected\x20camera\x20is\x20not\x20active.',
    DEVICE_LOCKED_OUT: 'The\x20device\x20is\x20locked\x20out\x20of\x20ZoOm.',
    LICENSE_EXPIRED_OR_INVALID:
      'License\x20was\x20expired,\x20contained\x20invalid\x20text,\x20or\x20you\x20are\x20attempting\x20to\x20initialize\x20on\x20a\x20domain\x20that\x20is\x20not\x20specified\x20in\x20your\x20license.'
  }
  var _0xdde3ce = {
    faceMetrics: { auditTrail: [] },
    sessionData: null,
    facemap: null,
    sessionId: '',
    status: _0x36b693['NeverValidated']
  }
  var _0x4af32b = { resourceDirectory: '../ZoomAuthentication.js/resources' }
  function _0x585f27() {
    if (ZoomSDK['getBrowserSupport']()['zoomSupportData']['deficientSystem']) {
      return _0x54ba0b['DEVICE_NOT_SUPPORTED']
    }
    if (_0x1948d4['ZoomInterface']['isMobileDeviceInLandscapeMode']()) {
      return _0x54ba0b['DEVICE_IN_LANDSCAPE_MODE']
    }
    switch (_0x939bf['appTokenValidationState']) {
      case _0x4084d5['Validated']:
        if (_0x1948d4['ZoomLockout']['isLockedOut']()) {
          return _0x54ba0b['DEVICE_LOCKED_OUT']
        }
        return _0x54ba0b['INITIALIZED']
      case _0x4084d5['Rejected']:
        return _0x1948d4['validationUsedLicense'] ? _0x54ba0b['LICENSE_EXPIRED_OR_INVALID'] : _0x54ba0b['INVALID_TOKEN']
      case _0x4084d5['NetworkError']:
        return _0x54ba0b['NETWORK_ISSUES']
      case _0x4084d5['VersionDeprecated']:
        return _0x54ba0b['VERSION_DEPRECATED']
      case _0x4084d5['UserIsLockedOut']:
        return _0x54ba0b['DEVICE_LOCKED_OUT']
      case _0x4084d5['NeverValidated']:
      default:
        return _0x54ba0b['NEVER_INITIALIZED']
    }
  }
  var _0x5b1f0d = { sessionsThisInit: 0x0, totalTime: 0x0, dateTime: 0x0 }
  var _0x4b64a7 = '____defaultAppTokenValueWhenUnset_should_be_optional'
  var _0x24305a = '___defaultApplicationIdValueWhenUnset_should_be_optional'
  var _0x4a29ca
  _0x1948d4['validationUsedLicense'] = ![]
  _0x1948d4['appToken'] = _0x4b64a7
  _0x1948d4['applicationId'] = _0x24305a
  var _0x400641 = ![]
  var _0x939bf = {
    AuditTrailEnabled: ![],
    AuditTrailAvailable: ![],
    SendDiagnosticsToFaceTec: !![],
    MaxDiagnosticFramesToSend: 0xa,
    ZoomModeFromMeta: 0x0,
    FailuresBeforeAuthLockout: -0x1,
    AuthLockoutTimeInSeconds: 0x0,
    ActiveTimeoutInSeconds: 0x1e,
    cacheKey: '',
    isWifiRequiredForDevMode: !![],
    preferredLanguage: '',
    isMotionDisabledFromApi: ![],
    isImageSwapDisabledFromApi: ![],
    imageSwapThresholdFromApi: 0x0,
    isLatestVersion: ![],
    wasValidationAttempted: ![],
    appTokenValidationState: _0x4084d5['NeverValidated']
  }
  var _0x3d3e2d
  var _0x1b373e
  function _0x3c2d5b(_0x187f11) {
    var _0x4252a1 = document['createElement']('link')
    _0x4252a1['setAttribute']('rel', 'stylesheet')
    _0x4252a1['setAttribute']('type', 'text/css')
    _0x4252a1['setAttribute']('id', 'zoom-stylesheet')
    _0x4252a1['setAttribute']('href', _0x4af32b['resourceDirectory'] + '/css/' + _0x187f11)
    document['getElementsByTagName']('head')[0x0]['appendChild'](_0x4252a1)
  }
  function _0x40c54d(_0x5f4c33, _0x23e3d9) {
    if (!_0x5f4c33 || !_0x23e3d9) {
      throw 'Invalid\x20initialization\x20parameters.\x20Must\x20be\x20AppToken,\x20callback'
    }
    _0x1948d4['validationUsedLicense'] = ![]
    _0x4a29ca = Object['assign']({}, _0x5b1f0d)
    _0x4a29ca['dateTime'] = Date['now']()
    _0x1948d4['appToken'] = _0x5f4c33
    _0x1948d4['PhWeb']['loadResources']()
    ZoomSDK['ZoomInternal']['FPA']['loadresources']()
    ZoomSDK['ZoomInternal']['ZoomLockout']['initialize']()
    _0x26cf79(_0x23e3d9, _0x5f4c33)
  }
  function _0x26cf79(_0x2dc591, _0xf50008) {
    _0x939bf['wasValidationAttempted'] = !![]
    if (_0x400641) {
      if (_0x939bf['appTokenValidationState'] !== _0x4084d5['VersionDeprecated']) {
        _0x2dc591(!![])
      } else {
        _0x2dc591(![])
      }
      return
    }
    if (typeof window !== 'undefined') {
      ZoomSDK['ZoomInternal']['ZAPI']['init'](function(_0x40ac7e, _0x47fdfa, _0x19dcfc) {
        var _0x59d448
        _0x40ac7e['done'] = !![]
        _0x47fdfa['done'] = !![]
        if (_0x19dcfc['wasInitSuccessful'] == !![]) {
          _0x939bf['AuditTrailAvailable'] = _0x19dcfc['auditTrailAvailable']
          _0x939bf['MaxDiagnosticFramesToSend'] = _0x19dcfc['maxDiagnosticFramesToSend']
          _0x939bf['ZoomModeFromMeta'] = _0x19dcfc['zoomModeFromMeta']
          _0x939bf['SendDiagnosticsToFaceTec'] = _0x19dcfc['sendDiagnosticsToFaceTec']
          _0x939bf['cacheKey'] = _0x19dcfc['cacheKey']
          _0x939bf['isWifiRequiredForDevMode'] = _0x19dcfc['isWifiRequiredForDevMode']
          _0x939bf['isMotionDisabledFromApi'] = _0x19dcfc['motionDisabled']
          _0x939bf['isImageSwapDisabledFromApi'] = _0x19dcfc['imageSwapDisabled']
          _0x939bf['imageSwapThresholdFromApi'] = _0x19dcfc['imageSwapThreshold']
          _0x939bf['isLatestVersion'] = _0x19dcfc['isLatestVersion']
          _0x400641 = !![]
          _0x1948d4['applicationId'] = _0x19dcfc['applicationId']
          if (!_0x19dcfc['isVersionDeprecated']) {
            _0x939bf['appTokenValidationState'] = _0x4084d5['Validated']
            _0x59d448 = !![]
          } else {
            _0x939bf['appTokenValidationState'] = _0x4084d5['VersionDeprecated']
            _0x59d448 = ![]
          }
        } else if (_0x19dcfc['wasInitSuccessful'] == ![]) {
          _0x939bf['appTokenValidationState'] = _0x4084d5['ServerInvalidatedToken']
          _0x59d448 = ![]
        } else {
          _0x59d448 = ![]
          _0x939bf['appTokenValidationState'] = _0x4084d5['NetworkError']
        }
        _0x2dc591(_0x59d448)
        _0x4a29ca['totalTime'] = Date['now']() - _0x4a29ca['dateTime']
      }, _0xf50008)
    }
  }
  function _0x1c9bea(_0x574cb5) {
    ZoomSDK['ZoomInternal']['FPA']['loadresources'](function(_0x481911) {
      if (_0x481911) {
        _0x574cb5(_0x2c1fdd['Error'])
        return
      }
      _0x574cb5(_0x2c1fdd['Success'])
      _0x5561fe = !![]
    })
  }
  function _0x57ec54(_0x290fc1, _0x51065d, _0x4a83a0) {
    var _0x2e5850 = document['getElementById'](_0x290fc1)
    if (!_0x2e5850) {
      if (_0x4a83a0 && typeof _0x4a83a0 === 'function') {
        _0x4a83a0(_0x59f7bc['ZoomVideoOrInterfaceDOMElementDoesNotExist'])
      }
      console['log'](
        'ZoOm\x20Error\x2012002:\x20prepareInterface\x20requires\x20a\x20valid\x20div\x20for\x20the\x20ZoOm\x20interface\x20container.'
      )
      return
    }
    if (!_0x51065d || !document['getElementById'](_0x51065d)) {
      if (_0x4a83a0 && typeof _0x4a83a0 === 'function') {
        _0x4a83a0(_0x59f7bc['ZoomVideoOrInterfaceDOMElementDoesNotExist'])
      }
      console['log'](
        'ZoOm\x20Error\x2012003:\x20prepareInterface\x20requires\x20a\x20valid\x20id\x20for\x20the\x20ZoOm\x20video\x20element.'
      )
      return
    }
    if (!_0x4a83a0 || typeof _0x4a83a0 !== 'function') {
      console['log']('ZoOm\x20Error\x2012004:\x20prepareInterface\x20requries\x20a\x20callback\x20function')
      return
    }
    if (document['readyState'] !== 'complete') {
      _0x4a83a0(_0x59f7bc['DocumentNotReady'])
      return
    }
    if (ZoomSDK['getStatus']() === ZoomSDK['ZoomTypes']['ZoomSDKStatus']['DEVICE_IN_LANDSCAPE_MODE']) {
      _0x4a83a0(_0x59f7bc['DeviceInLandscapeMode'])
      return
    }
    if (!_0x5561fe) {
      _0x4a83a0(_0x59f7bc['NotPreloaded'])
      return
    }
    if (ZoomSDK['ZoomInternal']['ZoomInterface']['isZoomInterfacePrepared']()) {
      if (ZoomSDK['ZoomInternal']['State']['getIsCapturingZoom']()) {
        _0x4a83a0(_0x59f7bc['ZoomSessionInProgress'])
        return
      }
    }
    ZoomSDK['ZoomInternal']['FPA']['initDomCanvasElementsForVideoProcessing']()
    var _0x37ab28 = document['getElementById'](_0x51065d)
    if (!_0x37ab28 || _0x37ab28['videoHeight'] === 0x0 || _0x37ab28['videoWidth'] === 0x0) {
      _0x4a83a0(_0x59f7bc['VideoHeightOrWidthZeroOrUninitialized'])
      return
    }
    ZoomSDK['ZoomInternal']['FPA']['loadVideoProcessor'](_0x37ab28)
    ZoomSDK['ZoomInternal']['ZoomInterface']['Oval']['unload']()
    ZoomSDK['ZoomInternal']['ZoomInterface']['setupZoomDOM'](_0x2e5850, _0x37ab28)
    ZoomSDK['ZoomInternal']['State']['setZoomIsReadyForCapture']()
    _0x4a83a0(_0x59f7bc['Success'])
  }
  function _0x588a1c() {
    _0x3d3e2d = document['getElementsByTagName']('script')
    var _0x556e3b = _0x3d3e2d[_0x3d3e2d['length'] - 0x1]['src']
    var _0x28084e = _0x556e3b['split']('/')
    _0x28084e['shift']()
    _0x28084e['shift']()
    _0x28084e['shift']()
    _0x28084e['pop']()
    _0x1b373e = ''
    _0x28084e['forEach'](function(_0x312be3) {
      _0x1b373e += '/' + _0x312be3
    })
    _0x3c2d5b('zoom-style.css')
    _0x1948d4['ZoomPath'] = _0x1b373e
  }
  function _0x5aeedb(_0x3c1024, _0x5a88a8, _0x13ce52) {
    _0x1948d4['ZoomLicenseValidator']['getLicenseStatus'](_0x3c1024, _0x5a88a8, function(_0x487f34) {
      if (_0x487f34 == _0x1948d4['ZoomLicenseValidator']['LicenseStatus']['VALIDATED']) {
        _0x939bf['appTokenValidationState'] = _0x4084d5['Validated']
        _0x939bf['SendDiagnosticsToFaceTec'] = ![]
        _0x13ce52(!![])
      } else {
        _0x939bf['appTokenValidationState'] = _0x4084d5['Rejected']
        _0x13ce52(![])
      }
    })
  }
  _0x1948d4['returnResults'] = function(_0x2dc4a5) {
    _0xdde3ce['status'] = _0x2dc4a5['status']
    _0xdde3ce['sessionData'] = _0x2dc4a5['sessionData']
    _0xdde3ce['facemap'] = _0x2dc4a5['sessionData']
    _0xdde3ce['sessionId'] = _0x2dc4a5['sessionId']
    _0xdde3ce['faceMetrics'] = _0x2dc4a5['faceMetrics']
    _0x578c90['onZoomSessionComplete'](_0xdde3ce)
  }
  _0x1948d4['zoomInitTimes'] = function() {
    return { sti: _0x4a29ca['sessionsThisInit'], tt: _0x4a29ca['totalTime'], dt: _0x4a29ca['dateTime'] }
  }
  _0x1948d4['currentApplicationSettings'] = function() {
    return _0x939bf
  }
  _0x1948d4['setSessionResultStatus'] = function(_0x254997) {
    _0xdde3ce['status'] = _0x254997
  }
  _0x1948d4['initializeWithLicenseText'] = function(_0x48a8be, _0x38ccfd, _0xd0e1fa) {
    if (_0x939bf['appTokenValidationState'] == _0x4084d5['Validated']) {
      _0xd0e1fa(!![])
      return
    }
    _0x1948d4['appToken'] = _0x38ccfd
    _0x1948d4['validationUsedLicense'] = !![]
    _0x1948d4['PhWeb']['loadResources']()
    ZoomSDK['ZoomInternal']['FPA']['loadresources'](function() {
      _0x5aeedb(_0x48a8be, _0x38ccfd, function(_0x508fc6) {
        if (_0x508fc6) {
          _0x4a29ca = Object['assign']({}, _0x5b1f0d)
          _0x4a29ca['dateTime'] = Date['now']()
          _0x1948d4['appToken'] = _0x38ccfd
          ZoomSDK['ZoomInternal']['ZoomLockout']['initialize']()
        }
        _0xd0e1fa(_0x508fc6)
      })
    })
  }
  _0x1948d4['ZoomSessionProcessing'] = function() {
    _0x578c90['onZoomSessionProcessingStarted'](ZoomSDK['ZoomInternal']['State']['getLastZoomResult']())
  }
  function _0x5cc94d(_0x3aab5b) {
    _0x1948d4['FPA']['unloadResources']()
    _0x1948d4['PhWeb']['unloadResources']()
    _0x1948d4['ZoomInterface']['unloadResources']()
    _0x1948d4['ZoomLockout']['unloadResources']()
    _0x5561fe = ![]
    try {
      var _0x1ca64d = document['getElementById']('zoom-stylesheet')
      if (_0x1ca64d) {
        _0x1ca64d['parentNode']['removeChild'](_0x1ca64d)
      }
    } catch (_0x15ad56) {}
    _0x3aab5b()
  }
  var _0x26dc2f = {}
  return {
    initialize: function(_0x451d3b, _0x2d80ca) {
      if (typeof window !== 'undefined') {
        _0x588a1c()
      }
      _0x40c54d(_0x451d3b, _0x2d80ca)
    },
    zoomResourceDirectory: function(_0x437567) {
      if (_0x437567) {
        _0x4af32b['resourceDirectory'] = _0x437567
      }
      return _0x4af32b['resourceDirectory']
    },
    initializeWithLicenseText: function(_0x3fdee5, _0x5f2208, _0x457aa5) {
      if (typeof window !== 'undefined') {
        _0x588a1c()
      }
      ZoomSDK['ZoomInternal']['initializeWithLicenseText'](_0x3fdee5, _0x5f2208, _0x457aa5)
    },
    preload: function(_0x544384) {
      if (typeof _0x544384 != 'function') {
        console['log']('ZoOm\x20Error\x2012006:\x20ZoomSDK.preload\x20requires\x20a\x20callback\x20function')
        return
      }
      _0x1c9bea(_0x544384)
    },
    prepareInterface: function(_0x36eed4, _0x4b21a3, _0x4f9761) {
      _0x57ec54(_0x36eed4, _0x4b21a3, _0x4f9761)
    },
    getStatus: function() {
      return _0x585f27()
    },
    auditTrailType: _0x3ffd37,
    ZoomSession: _0x1948d4['zoomSession'],
    ZoomTypes: {
      ZoomSDKStatus: _0x54ba0b,
      ZoomPreloadResult: _0x2c1fdd,
      ZoomPrepareInterfaceResult: _0x59f7bc,
      ZoomCaptureResult: _0x36b693,
      ZoomAuditTrailType: _0x40f301
    },
    getBrowserSupport: function() {
      var _0x1a9602 = !ZoomSDK['ZoomInternal']['ZoomInfo']['checkZoomDeficiencies']()['deficientSystem']
      var _0x13dfe2
      if (!_0x1a9602) {
        _0x13dfe2 = 'System\x20is\x20not\x20sufficient\x20to\x20support\x20ZoOm.'
      } else {
        _0x13dfe2 = 'System\x20is\x20sufficient\x20to\x20support\x20ZoOm.'
      }
      return {
        supported: _0x1a9602,
        status: _0x13dfe2,
        osName: ZoomSDK['ZoomInternal']['ZoomInfo']['DetectRTC']['osName'],
        browserName: ZoomSDK['ZoomInternal']['ZoomInfo']['DetectRTC']['browser']['name'],
        isMobileDevice: ZoomSDK['ZoomInternal']['ZoomInfo']['DetectRTC']['isMobileDevice'],
        zoomSupportData: ZoomSDK['ZoomInternal']['ZoomInfo']['checkZoomDeficiencies'](),
        DetectRTC: ZoomSDK['ZoomInternal']['ZoomInfo']['DetectRTC']
      }
    },
    getLockoutData: function() {
      return ZoomSDK['ZoomInternal']['ZoomLockout']['getLockoutData']()
    },
    createZoomAPIUserAgentString: function(_0x79ae2c) {
      return ZoomSDK['ZoomInternal']['ZAPI']['createZoomAPIUserAgentString'](_0x79ae2c)
    },
    ZoomCustomization: function() {
      return ZoomSDK['ZoomInternal']['ZoomCustomization']['ZoomCustomization']
    },
    ZoomOvalCustomization: function() {
      return ZoomSDK['ZoomInternal']['ZoomCustomization']['ZoomOvalCustomization']
    },
    ZoomCancelButtonCustomization: function() {
      return ZoomSDK['ZoomInternal']['ZoomCustomization']['ZoomCancelButtonCustomization']
    },
    ZoomExitAnimationCustomization: function() {
      return ZoomSDK['ZoomInternal']['ZoomCustomization']['ZoomExitAnimationCustomization']
    },
    ZoomFeedbackCustomization: function() {
      return _0x1948d4['ZoomCustomization']['ZoomFeedbackCustomization']
    },
    ZoomFrameCustomization: function() {
      return _0x1948d4['ZoomCustomization']['ZoomFrameCustomization']
    },
    setCustomization: function(_0x302f50) {
      _0x1948d4['ZoomCustomization']['setCustomization'](_0x302f50)
    },
    ZoomExitAnimationStyle: _0x1948d4['ZoomCustomization']['ZoomExitAnimationStyle'],
    ZoomCancelButtonLocation: _0x26dc2f,
    ZoomInternal: _0x1948d4,
    unload: function(_0x372682) {
      _0x5cc94d(_0x372682)
    }
  }
})()
exports['ZoomSDK'] = ZoomSDK
ZoomSDK['ZoomInternal']['Constants'] = (function() {
  var _0x179751 = ''
  var _0x446e00 = 0x49dab
  var _0x1390ca = window['location']['hostname']
  var _0x52045a = '8k'
  var _0x5234ca = '4h'
  var _0x459862 = 'fj'
  var _0x3cfeab = '7f'
  var _0xcb7e59 = '13'
  var _0x225a71 = Object['freeze']({ WASM: 'WASM' })
  var _0x46c8bb = function() {
    var _0x29e354 = []
    Object['keys'](_0x225a71)['map'](function(_0xde33fd) {
      switch (_0xde33fd) {
        case _0x225a71['WASM']:
          _0x29e354['push']({ name: _0xde33fd, status: !![] })
          break
        default:
          _0x29e354['push']({ name: _0xde33fd, status: ![], ftmsg: 'Coming\x20Soon' })
      }
    })
    return _0x29e354
  }
  return {
    ZOOM_VERSION: function() {
      return ZoomSDK['Current']['zoomVersion']
    },
    APPLICATION_ID: _0x446e00,
    CLIENT_PACKAGE: _0x1390ca,
    DEVICE_ID: undefined,
    DEVICE_MODEL: _0x179751,
    ZOOM_SESSION_WEB: _0x52045a,
    TYPE_VERIFICATION: _0x5234ca,
    SESSION_RESULT_OVERALL_SESSION_FAILED_TIMEOUT: _0x459862,
    SESSION_RESULT_OVERALL_ENROLLMENT_CANCEL: _0x3cfeab,
    SESSION_RESULT_OVERALL_CONTEXT_SWITCH: _0xcb7e59,
    SupportedZoomModeTypes: _0x225a71,
    SupportedZoomModes: function() {
      return _0x46c8bb()
    }
  }
})()
var ZoomSDK = exports['ZoomSDK']
ZoomSDK['ZoomInternal']['ZoomInfo'] = (function() {
  if (typeof window == 'undefined') {
    return
  }
  var _0x122578 = ZoomSDK['ZoomInternal']['Constants']['SupportedZoomModes']()
  var _0x47cff9 = {}
  var _0x32f4fe = 0x0
  var _0x28585d = (function() {
    function _0x2a9878() {
      if (typeof window !== 'undefined' && typeof window['navigator'] !== 'undefined') {
        return _0x531367(window['navigator']['userAgent'])
      }
    }
    function _0x188e0e(_0x4fb80d) {
      var _0x2680b8 = _0x38215f()
      var _0x1d4069 = _0x2680b8['filter'](function(_0x283d5c) {
        return _0x283d5c['rule'] && _0x283d5c['rule']['test'](_0x4fb80d)
      })[0x0]
      return _0x1d4069 ? _0x1d4069['name'] : null
    }
    function _0x531367(_0x2bfa0b) {
      var _0xf963e4 = _0x158a6a()
      if (!_0x2bfa0b) {
        return null
      }
      var _0x396f74 =
        _0xf963e4['map'](function(_0x32ebb7) {
          var _0x4832f4 = _0x32ebb7['rule']['exec'](_0x2bfa0b)
          var _0x33145a = _0x4832f4 && _0x4832f4[0x1]['split'](/[._]/)['slice'](0x0, 0x3)
          if (_0x33145a && _0x33145a['length'] < 0x3) {
            _0x33145a = _0x33145a['concat'](_0x33145a['length'] == 0x1 ? [0x0, 0x0] : [0x0])
          }
          return _0x4832f4 && { name: _0x32ebb7['name'], version: _0x33145a['join']('.') }
        })['filter'](Boolean)[0x0] || null
      if (_0x396f74) {
        _0x396f74['os'] = _0x188e0e(_0x2bfa0b)
      }
      if (
        /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/i[
          'test'
        ](_0x2bfa0b)
      ) {
        _0x396f74 = _0x396f74 || {}
        _0x396f74['bot'] = !![]
      }
      return _0x396f74
    }
    function _0x158a6a() {
      return _0x51adb2([
        ['aol', /AOLShield\/([0-9\._]+)/],
        ['edge', /Edge\/([0-9\._]+)/],
        ['yandexbrowser', /YaBrowser\/([0-9\._]+)/],
        ['vivaldi', /Vivaldi\/([0-9\.]+)/],
        ['kakaotalk', /KAKAOTALK\s([0-9\.]+)/],
        ['samsung', /SamsungBrowser\/([0-9\.]+)/],
        ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
        ['phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/],
        ['crios', /CriOS\/([0-9\.]+)(:?\s|$)/],
        ['firefox', /Firefox\/([0-9\.]+)(?:\s|$)/],
        ['fxios', /FxiOS\/([0-9\.]+)/],
        ['opera', /Opera\/([0-9\.]+)(?:\s|$)/],
        ['opera', /OPR\/([0-9\.]+)(:?\s|$)/],
        ['ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
        ['ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
        ['ie', /MSIE\s(7\.0)/],
        ['bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/],
        ['android', /Android\s([0-9\.]+)/],
        ['ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/],
        ['safari', /Version\/([0-9\._]+).*Safari/],
        ['facebook', /FBAV\/([0-9\.]+)/],
        ['instagram', /Instagram\s([0-9\.]+)/],
        ['ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/]
      ])
    }
    function _0x38215f() {
      return _0x51adb2([
        ['iOS', /iP(hone|od|ad)/],
        ['Android\x20OS', /Android/],
        ['BlackBerry\x20OS', /BlackBerry|BB10/],
        ['Windows\x20Mobile', /IEMobile/],
        ['Amazon\x20OS', /Kindle/],
        ['Windows\x203.11', /Win16/],
        ['Windows\x2095', /(Windows 95)|(Win95)|(Windows_95)/],
        ['Windows\x2098', /(Windows 98)|(Win98)/],
        ['Windows\x202000', /(Windows NT 5.0)|(Windows 2000)/],
        ['Windows\x20XP', /(Windows NT 5.1)|(Windows XP)/],
        ['Windows\x20Server\x202003', /(Windows NT 5.2)/],
        ['Windows\x20Vista', /(Windows NT 6.0)/],
        ['Windows\x207', /(Windows NT 6.1)/],
        ['Windows\x208', /(Windows NT 6.2)/],
        ['Windows\x208.1', /(Windows NT 6.3)/],
        ['Windows\x2010', /(Windows NT 10.0)/],
        ['Windows\x20ME', /Windows ME/],
        ['Open\x20BSD', /OpenBSD/],
        ['Sun\x20OS', /SunOS/],
        ['Linux', /(Linux)|(X11)/],
        ['Mac\x20OS', /(Mac_PowerPC)|(Macintosh)/],
        ['QNX', /QNX/],
        ['BeOS', /BeOS/],
        ['OS/2', /OS\/2/],
        ['Search\x20Bot', /(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves\/Teoma)|(ia_archiver)/]
      ])
    }
    function _0x51adb2(_0x3e5a09) {
      return _0x3e5a09['map'](function(_0x3cae65) {
        return { name: _0x3cae65[0x0], rule: _0x3cae65[0x1] }
      })
    }
    return { detect: _0x2a9878, detectOS: _0x188e0e, parseUserAgent: _0x531367 }
  })()
  var _0x45689f
  _0x45689f = {
    DetectRTC: {
      isGetUserMediaSupported: ![],
      isWebWasmSupported: ![],
      isWebWorkerSupported: ![],
      isIosAndNotSafari: ![],
      browser: {
        name: '',
        osName: '',
        version: 0x0,
        isChrome: ![],
        isFirefox: ![],
        isSafari: ![],
        isEdge: ![],
        isOpera: ![],
        isIE: ![]
      },
      osName: '',
      deficientSystem: ![],
      isMobileDevice: ![]
    },
    displayResolution: '',
    displayAspectRatio: '',
    browser: {
      name: '',
      osName: '',
      version: 0x0,
      isChrome: ![],
      isEdge: ![],
      isFirefox: ![],
      isOpera: ![],
      isSafari: ![],
      isIE: ![]
    },
    isIosAndNotSafari: ![],
    isMobileDevice: ![],
    isIpad: ![],
    supported: ![],
    status: 'Detection\x20incomplete',
    deficientSystem: ![]
  }
  _0x45689f['DetectRTC']['isWebWasmSupported'] = (function() {
    try {
      if (typeof WebAssembly === 'object' && typeof WebAssembly['instantiate'] === 'function') {
        var _0x36a59c = new WebAssembly['Module'](Uint8Array['of'](0x0, 0x61, 0x73, 0x6d, 0x1, 0x0, 0x0, 0x0))
        if (_0x36a59c instanceof WebAssembly['Module'])
          return new WebAssembly['Instance'](_0x36a59c) instanceof WebAssembly['Instance']
      }
    } catch (_0x2d7644) {}
    return ![]
  })()
  _0x45689f['DetectRTC']['isWebWorkerSupported'] = (function() {
    if (typeof Worker !== 'undefined') {
      return !![]
    } else {
      return ![]
    }
  })()
  function _0x3fe8fb() {
    _0x45689f['DetectRTC']['deficientSystem'] = _0x45689f['deficientSystem']
    _0x45689f['DetectRTC']['osName'] = _0x45689f['browser']['osName']
    _0x45689f['DetectRTC']['isIosAndNotSafari'] = _0x45689f['isIosAndNotSafari']
    _0x45689f['DetectRTC']['isMobileDevice'] = _0x45689f['isMobileDevice']
    _0x122578 = ZoomSDK['ZoomInternal']['Constants']['SupportedZoomModes']()
    _0x45689f['DetectRTC']['browser'] = _0x45689f['browser']
    _0x47cff9['GetUserMediaSupported'] = _0x45689f['DetectRTC']['isGetUserMediaSupported']
    _0x32f4fe = 0x0
    _0x122578['forEach'](function(_0x3d0b92) {
      var _0x16d3c8 = _0x3d0b92['name']
      _0x47cff9[_0x16d3c8] = {}
      _0x47cff9[_0x16d3c8]['status'] = _0x3d0b92['status']
      if (_0x3d0b92['ftmsg']) {
        _0x32f4fe++
        _0x47cff9[_0x16d3c8]['msg'] = _0x3d0b92['ftmsg']
      } else {
        switch (_0x16d3c8) {
          case ZoomSDK['ZoomInternal']['Constants']['SupportedZoomModeTypes']['WASM']:
            if (!_0x45689f['DetectRTC']['isWebWasmSupported'] || !_0x45689f['DetectRTC']['isWebWorkerSupported']) {
              _0x32f4fe++
              _0x47cff9[_0x3d0b92['name']]['status'] = ![]
              if (!_0x45689f['DetectRTC']['isWebWasmSupported']) {
                _0x47cff9[_0x3d0b92['name']]['msg'] = 'Web\x20Assembly\x20is\x20not\x20supported'
              }
              if (!_0x45689f['DetectRTC']['isWebWorkerSupported']) {
                _0x47cff9[_0x3d0b92['name']]['msg1'] = 'Web\x20Worker\x20is\x20not\x20supported'
              }
            }
            break
          default:
        }
      }
    })
  }
  _0x45689f['browser'] = _0x28585d['detect']()
  if (_0x45689f['browser']['name'] === 'ios') {
    _0x45689f['browser']['name'] = 'safari'
  }
  _0x45689f['browser']['osName'] = _0x28585d['detectOS'](navigator['userAgent'])
  _0x45689f['DetectRTC']['osName'] = _0x28585d['detectOS'](navigator['userAgent'])
  _0x45689f['isMobileDevice'] = !!/Android|webOS|iPhone|iPad|iPod|BB10|BlackBerry|IEMobile|Opera Mini|Mobile|mobile/i[
    'test'
  ](navigator['userAgent'] || '')
  _0x45689f['isIpad'] = !!/iPad/i['test'](navigator['userAgent'] || '')
  _0x45689f['browser']['isEdge'] = _0x45689f['browser']['name'] === 'edge'
  _0x45689f['browser']['isFirefox'] =
    'fxios' == _0x45689f['browser']['name'] || 'firefox' == _0x45689f['browser']['name']
  _0x45689f['browser']['isOpera'] = _0x45689f['browser']['name'] === 'opera'
  _0x45689f['browser']['isSafari'] = 'ios' == _0x45689f['browser']['name'] || 'safari' == _0x45689f['browser']['name']
  _0x45689f['browser']['isChrome'] = 'crios' == _0x45689f['browser']['name'] || 'chrome' == _0x45689f['browser']['name']
  _0x45689f['browser']['isIE'] = _0x45689f['browser']['name'] === 'ie'
  _0x45689f['isIosAndNotSafari'] =
    _0x45689f['isMobileDevice'] && _0x45689f['DetectRTC']['osName'] === 'iOS' && !_0x45689f['browser']['isSafari']
  if (navigator && navigator['mediaDevices']) {
    navigator['mediaDevices']['getUserMedia'] =
      navigator['mediaDevices']['getUserMedia'] ||
      navigator['webkitGetUserMedia'] ||
      navigato['mozGetUserMedia'] ||
      navigator['msGetUserMedia'] ||
      navigator['oGetUserMedia'] ||
      navigator['getUserMedia']
    if (navigator['mediaDevices']['getUserMedia']) {
      _0x45689f['DetectRTC']['isGetUserMediaSupported'] = !![]
    }
    _0x3fe8fb()
  } else {
    _0x45689f['deficientSystem'] = !![]
    _0x3fe8fb()
  }
  var _0x2f2f13 =
    !_0x47cff9['GetUserMediaSupported'] ||
    _0x32f4fe === _0x122578['length'] ||
    _0x45689f['isIosAndNotSafari'] ||
    !_0x45689f['DetectRTC']['isWebWasmSupported'] ||
    !_0x45689f['DetectRTC']['isWebWorkerSupported']
  return {
    browserSupport: _0x45689f,
    getSystemData: function(_0xf4d7c0) {
      var _0x21f0ac = 0x1
      if (typeof ZoomSDK == 'undefined' || ZoomSDK['ZoomInternal']['Constants'] == 'undefined') {
        _0x21f0ac = 0x3e8
      }
      setTimeout(function() {
        _0xf4d7c0(_0x45689f['DetectRTC'])
      }, _0x21f0ac)
    },
    DetectRTC: _0x45689f['DetectRTC'],
    checkZoomDeficiencies: function() {
      return { deficientSystem: _0x2f2f13, zoomModeResponse: _0x47cff9 }
    }
  }
})()
ZoomSDK['ZoomInternal']['ZoomLicenseValidator'] = (function() {
  var _0x53f4cf
  ;(function(_0xc7c35c) {
    _0xc7c35c[(_0xc7c35c['NOT_PRESENT'] = 0x0)] = 'NOT_PRESENT'
    _0xc7c35c[(_0xc7c35c['INVALID'] = 0x1)] = 'INVALID'
    _0xc7c35c[(_0xc7c35c['VALIDATED'] = 0x2)] = 'VALIDATED'
  })(_0x53f4cf || (_0x53f4cf = {}))
  function _0x480f58(_0x2ffad8) {
    return !_0x2ffad8 || 0x0 === _0x2ffad8['length']
  }
  function _0x4b47ec(_0xf9ec43) {
    var _0x23cde5 = /^[0-9a-fA-F]+$/
    if (_0x23cde5['test'](_0xf9ec43)) {
      return !![]
    } else {
      return ![]
    }
  }
  function _0x4471a2(_0x1186c9, _0x1a248e, _0x7b1159) {
    var _0x474362 = ''
    var _0x46129a = ''
    var _0x56fa76
    if (typeof _0x1186c9 === 'string') {
      _0x56fa76 = JSON['parse'](_0x1186c9)
    } else if (typeof _0x1186c9 === 'object') {
      _0x56fa76 = _0x1186c9
    } else {
      throw 'Invalid\x20license\x20' + _0x1186c9
    }
    try {
      _0x474362 = _0x56fa76['expiryDate'] || ''
      _0x46129a = _0x56fa76['key'] || ''
    } catch (_0x519932) {}
    if (_0x480f58(_0x474362) || _0x480f58(_0x46129a) || _0x480f58(_0x1a248e)) {
      return _0x7b1159(_0x53f4cf['INVALID'])
    }
    try {
      if (_0x46129a['length'] % 0x2 !== 0x0) {
        return _0x7b1159(_0x53f4cf['INVALID'])
      }
      if (!_0x4b47ec(_0x46129a)) {
        return _0x7b1159(_0x53f4cf['INVALID'])
      }
    } catch (_0x2e62e7) {
      return _0x7b1159(_0x53f4cf['INVALID'])
    }
    ZoomSDK['ZoomInternal']['FPA']['validateLicenseWithWasm'](_0x1a248e, _0x56fa76, function(_0x4d9f53) {
      if (_0x4d9f53) {
        return _0x7b1159(_0x53f4cf['VALIDATED'])
      } else {
        return _0x7b1159(_0x53f4cf['INVALID'])
      }
    })
  }
  return {
    LicenseStatus: _0x53f4cf,
    getLicenseStatus: function(_0x35f5c5, _0x43f5c4, _0x485361) {
      return _0x4471a2(_0x35f5c5, _0x43f5c4, _0x485361)
    }
  }
})()
;('use strict') // ZoomCustomizations.ts
// ZoomCustomizations shared api types
exports['__esModule'] = !![]
ZoomSDK['ZoomInternal']['ZoomCustomization'] = (function() {
  var _0x508759 = { None: 0x0, RippleOut: 0x1, FadeOutMin: 0x2 }
  var _0x25df91 = { Disable: 0x0, TopLeft: 0x1, TopRight: 0x2 }
  var _0x2ae43f = (function() {
    function _0x2ae43f() {
      this['exitAnimationSuccess'] = _0x508759['None']
      this['exitAnimationUnsuccess'] = _0x508759['None']
      this['exitAnimationSuccess'] = _0x508759['RippleOut']
      this['exitAnimationUnsuccess'] = _0x508759['None']
      return this
    }
    return _0x2ae43f
  })()
  var _0x429f4c = (function() {
    function _0x429f4c() {
      this['strokeColor'] = ''
      this['progressColor1'] = ''
      this['progressColor2'] = ''
      this['progressStrokeWidth'] = 0x0
      this['strokeWidth'] = 0x0
      this['strokeColor'] = 'rgba(255,255,255,\x201)'
      this['progressColor1'] = 'rgba(0,123,135,\x200.8)'
      this['progressColor2'] = 'rgba(1,198,217,\x200.8)'
      this['progressStrokeWidth'] = 0x7
      this['strokeWidth'] = 0x5
      return this
    }
    return _0x429f4c
  })()
  var _0x499db9 = (function() {
    function _0x499db9() {
      this['backgroundColor'] = ''
      this['backgroundColor'] = 'rgba(13,\x20165,\x20177,\x200.85)'
    }
    return _0x499db9
  })()
  var _0x4345b2 = (function() {
    function _0x4345b2() {
      this['location'] = _0x25df91['Disable']
      this['location'] = _0x25df91['TopLeft']
    }
    return _0x4345b2
  })()
  var _0xc7b62e = (function() {
    function _0xc7b62e() {
      this['backgroundColor'] = ''
      this['textColor'] = ''
      this['textFont'] = ''
      this['backgroundColor'] = 'rgba(13,\x20165,\x20177,\x200.85)'
      this['textColor'] = 'rgba(255,\x20255,\x20255,\x201)'
      this['textFont'] = 'normal\x20bold\x2022px/50px\x20\x27Source\x20Sans\x20Pro\x27,\x20Helvetica,\x20sans-serif'
    }
    return _0xc7b62e
  })()
  var _0x3800ec = (function() {
    function _0x3800ec() {
      this['ovalCustomization'] = {}
      this['feedbackCustomization'] = {}
      this['frameCustomization'] = {}
      this['exitAnimationCustomization'] = {}
      this['cancelButtonCustomization'] = {}
      this['ovalCustomization'] = new _0x429f4c()
      this['feedbackCustomization'] = new _0xc7b62e()
      this['frameCustomization'] = new _0x499db9()
      this['exitAnimationCustomization'] = new _0x2ae43f()
      this['cancelButtonCustomization'] = new _0x4345b2()
    }
    return _0x3800ec
  })()
  function _0xab993f(_0x1514e5) {
    Object['keys'](_0x1514e5)['map'](function(_0x20137e) {
      if (_0x20137e === 'backgroundColor') {
        console['warn'](
          'Developer\x20note:\x20Please\x20use\x20ZoomSDK.ZoomFrameCustomization\x20to\x20configure\x20the\x20background\x20color.'
        )
      } else if (!(_0x20137e in _0xda729f)) {
        console['warn']('Invalid\x20key\x20in\x20ZoomCustomization:', _0x20137e)
      } else {
        Object['keys'](_0x1514e5[_0x20137e])['map'](function(_0x3b91e9) {
          if (!(_0x3b91e9 in _0xda729f[_0x20137e])) {
            console['warn']('Invalid\x20key\x20in\x20Customization.' + _0x3b91e9 + ':', _0x3b91e9)
          } else if (typeof _0x1514e5[_0x20137e][_0x3b91e9] === 'undefined') {
            console['warn']('Invalid\x20Customization\x20Value\x20in:' + _0x20137e + '.' + _0x3b91e9)
          }
          _0xda729f[_0x20137e][_0x3b91e9] = _0x1514e5[_0x20137e][_0x3b91e9]
        })
      }
    })
  }
  ZoomSDK['ZoomExitAnimationStyle'] = _0x508759
  ZoomSDK['ZoomCancelButtonLocation'] = _0x25df91
  var _0xda729f = new _0x3800ec()
  return {
    ZoomCustomization: new _0x3800ec(),
    setCustomization: function(_0x275026) {
      _0xab993f(_0x275026)
    },
    currentCustomization: _0xda729f,
    ZoomOvalCustomization: new _0x429f4c(),
    ZoomCancelButtonCustomization: new _0x4345b2(),
    ZoomExitAnimationCustomization: new _0x2ae43f(),
    ZoomFeedbackCustomization: new _0xc7b62e(),
    ZoomFrameCustomization: new _0x499db9(),
    ZoomExitAnimationStyle: _0x2ae43f,
    ZoomCancelButtonLocation: _0x25df91
  }
})()
ZoomSDK['ZoomInternal']['State'] = (function() {
  var _0x576d89
  ;(function(_0x744bea) {
    _0x744bea[(_0x744bea['ShouldShowUnzoomed'] = 0x0)] = 'ShouldShowUnzoomed'
    _0x744bea[(_0x744bea['LookingForFirstZoomed'] = 0x1)] = 'LookingForFirstZoomed'
    _0x744bea[(_0x744bea['ShouldShowZoomed'] = 0x2)] = 'ShouldShowZoomed'
  })(_0x576d89 || (_0x576d89 = {}))
  ZoomSDK['ZoomInternal']['ZoomPhases'] = _0x576d89
  var _0x1a36d8
  ;(function(_0x137b6b) {
    _0x137b6b[(_0x137b6b['Ready'] = 0x0)] = 'Ready'
    _0x137b6b[(_0x137b6b['TransitionIn'] = 0x1)] = 'TransitionIn'
    _0x137b6b[(_0x137b6b['CapturingZoom'] = 0x2)] = 'CapturingZoom'
    _0x137b6b[(_0x137b6b['TransitionOut'] = 0x3)] = 'TransitionOut'
  })(_0x1a36d8 || (_0x1a36d8 = {}))
  var _0x219534 = {
    lastZoomResult: '',
    frameIndex: 0x0,
    zoomSessionStarted: Number['MAX_VALUE'],
    zoomPhase: _0x576d89['ShouldShowUnzoomed'],
    captureState: _0x1a36d8['Ready']
  }
  var _0xbda126 = 0x3c
  return {
    setLastZoomResult: function(_0x326741) {
      _0x219534['lastZoomResult'] = _0x326741
    },
    getLastZoomResult: function() {
      return _0x219534['lastZoomResult']
    },
    captureState: function() {
      return _0x219534['captureState']
    },
    isTimedOut: function() {
      return Date['now']() > _0x219534['zoomSessionStarted'] + 0x3e8 * _0xbda126
    },
    getIsZoomReadyForCapture: function() {
      return _0x219534['captureState'] == _0x1a36d8['Ready']
    },
    setZoomIsReadyForCapture: function() {
      _0x219534['captureState'] = _0x1a36d8['Ready']
    },
    setStartingZoom: function() {
      _0x219534['zoomSessionStarted'] = Date['now']()
      _0x219534['captureState'] = _0x1a36d8['TransitionIn']
    },
    getIsCapturingZoom: function() {
      return _0x219534['captureState'] == _0x1a36d8['CapturingZoom']
    },
    setIsCapturingZoom: function() {
      _0x219534['captureState'] = _0x1a36d8['CapturingZoom']
    },
    setZoomCaptureComplete: function() {
      _0x219534['captureState'] = _0x1a36d8['TransitionOut']
      _0x219534['zoomSessionStarted'] = Number['MAX_VALUE']
    },
    ZoomCaptureStates: _0x1a36d8
  }
})()
ZoomSDK['ZoomInternal']['ZoomStrings'] = {
  feedback_a_little_too_close: 'Move\x20Away\x20a\x20Little',
  feedback_a_little_too_close_tablet: 'Move\x20Away\x20a\x20Little',
  feedback_center_face: 'Center\x20Your\x20Face',
  feedback_face_not_found: 'Frame\x20Your\x20Face',
  feedback_nice_zoom: 'Nice\x20ZoOm!',
  feedback_move_phone_away: 'Move\x20Away',
  feedback_move_tablet_away: 'Move\x20Tablet\x20Away',
  feedback_move_tablet_closer: 'Move\x20Tablet\x20Closer',
  feedback_move_away_web: 'Move\x20Away',
  feedback_move_phone_closer: 'Move\x20Closer',
  feedback_move_phone_even_closer: 'Even\x20Closer',
  feedback_move_phone_to_eye_level: 'Raise\x20Camera\x20Up\x20To\x20Eye\x20Level',
  feedback_move_tablet_to_eye_level: 'Move\x20Tablet\x20Up\x20To\x20Eye\x20Level',
  feedback_move_to_eye_level_web: 'Move\x20Face\x20Up',
  feedback_face_not_looking_straight_ahead: 'Look\x20Straight\x20Ahead',
  feedback_face_not_upright: 'Hold\x20Your\x20Head\x20Straight',
  feedback_face_not_upright_mobile: 'Keep\x20Head\x20Straight',
  feedback_hold_steady: 'Hold\x20Steady',
  feedback_move_web_closer: 'Move\x20Closer',
  feedback_move_web_even_closer: 'Even\x20Closer',
  feedback_use_even_lighting: 'Light\x20Face\x20More\x20Evenly',
  feedback_welcome_back: 'Welcome\x20Back'
}
ZoomSDK['ZoomInternal']['ZoomInterface'] = (function() {
  if (typeof window === 'undefined') {
    return {}
  }
  var _0x43e226
  var _0x4f8a13 = 0.671875
  var _0x59d146 = 0x1e0
  var _0x231ab1 = Math['round'](_0x59d146 * _0x4f8a13)
  var _0x4794ba
  var _0x267e96
  var _0xf8c32f
  var _0x5033fa
  var _0x3a681a
  var _0x159ced
  var _0x37a86b
  var _0xe28e9b
  var _0x11f245
  var _0x25e638 = {
    feedbackContainer: 'zoom-feedback-container',
    feedback: 'zoom-feedback',
    ovalWrapper: 'zoom-oval-wrapper',
    xCancel: 'zoom-x-cancel',
    imageWrapper: 'zoom-image-wrapper',
    version: 'zoom-version',
    ovalFaceSpinner: 'zoom-face-spinner',
    userCreatedZoomContainerID: ''
  }
  function _0xd3df88(_0x1e6483, _0x2c5b68) {
    var _0x152158 = ZoomSDK['ZoomInternal']['ZoomInterfaceImages']['zoomLogoElement']
    if (ZoomSDK['getBrowserSupport']()['isMobileDevice']) {
      _0x152158['style']['width'] = '50px'
    } else {
      _0x152158['style']['width'] = '40px'
    }
    _0xf8c32f = ZoomSDK['ZoomInternal']['ZoomInterfaceImages']['cancelButtonImageElement']
    _0xf8c32f['id'] = _0x25e638['xCancel']
    _0xf8c32f['onclick'] = function() {
      ZoomSDK['ZoomInternal']['Zoom']['cancelZoomSession']('user')
    }
    _0x43e226 = _0x1e6483
    _0x25e638['userCreatedZoomContainerID'] = _0x43e226['id']
    if (window['getComputedStyle'](_0x43e226, null)['position'] != 'absolute') {
      console['warn'](
        'ZoOm\x20Warning:\x20\x27absolute\x27\x20positioning\x20is\x20required\x20on\x20the\x20interface\x20container\x20element.'
      )
    }
    var _0xd53d50 = _0x43e226['parentElement']['getBoundingClientRect']()
    _0x43e226['style']['width'] = Math['round'](_0xd53d50['width']) + 'px'
    _0x43e226['style']['height'] = Math['round'](_0xd53d50['height']) + 'px'
    var _0x33bef3 = _0xd53d50['width'] / _0xd53d50['height']
    var _0x1b0c2d = _0x2c5b68['videoWidth'] / _0x2c5b68['videoHeight']
    if (Math['abs'](_0x33bef3 - _0x1b0c2d) > 0.01) {
      console['warn'](
        'ZoOm\x20Warning:\x20Aspect\x20ratio\x20of\x20the\x20ZoOm\x20Parent\x20Container\x20does\x20not\x20match\x20the\x20true\x20aspect\x20ratio\x20of\x20the\x20camera\x20stream\x20rendered\x20to\x20the\x20ZoOm\x20Video\x20Element.\x20\x20This\x20may\x20cause\x20issues\x20with\x20alignment\x20of\x20the\x20ZoOm\x20Interface\x20with\x20the\x20video\x20being\x20displayed.'
      )
    }
    var _0x1ee8ca = _0x43e226['getBoundingClientRect']()
    _0x159ced = _0x1ee8ca['width']
    _0x37a86b = _0x1ee8ca['height']
    if (_0x159ced == 0x0 || _0x37a86b == 0x0) {
      console['warn'](
        'Warning\x2042000:\x20ZoOm\x20core\x20DOM\x20elements\x20are\x20set\x20to\x20display:\x20none\x20or\x20have\x20zero\x20height\x20or\x20zero\x20width.\x20\x20This\x20may\x20cause\x20rendering\x20issues.'
      )
    }
    var _0x3e318c = Math['round'](_0x159ced * 0.5)
    if (ZoomSDK['getBrowserSupport']()['isMobileDevice'] == !![]) {
      _0x3e318c = Math['round'](_0x159ced * 0.92)
    }
    _0x43e226['innerHTML'] =
      '<div\x20id=\x22' +
      _0x25e638['feedbackContainer'] +
      '\x22\x20style=\x22width:' +
      _0x3e318c +
      'px;\x22>' +
      '<div\x20id=\x22' +
      _0x25e638['feedback'] +
      '\x22>' +
      '</div>' +
      '</div>' +
      '<div\x20class=\x22videoWrapper\x22>' +
      '<div\x20id=\x22zoom-outside-interface-wrapper\x22\x20class=\x22zoom-interface\x22>' +
      '<div\x20id=\x22' +
      _0x25e638['ovalWrapper'] +
      '\x22>' +
      '<div\x20id=\x22zoom-oval-zoom\x22\x20>' +
      '<svg\x20id=\x22zoom-oval-svg\x22>' +
      '<path\x20id=\x22zoom-oval-combined-path\x22' +
      'fill=\x22#258988\x22\x20fill-rule=\x22evenodd\x22\x20stroke=\x22none\x22>' +
      '</path>' +
      '<path\x20id=\x22zoom-oval-path\x22' +
      'fill=\x22none\x22\x20stroke=\x22white\x22>' +
      '</path>' +
      '<path\x20id=\x22' +
      _0x25e638['ovalFaceSpinner'] +
      '\x22' +
      'fill=\x22none\x22>' +
      '</path>' +
      '</svg>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>'
    document['getElementById'](_0x25e638['feedbackContainer'])['style']['backgroundColor'] =
      ZoomSDK['ZoomInternal']['ZoomCustomization']['currentCustomization']['feedbackCustomization']['backgroundColor']
    document['getElementById'](_0x25e638['feedback'])['style']['font'] =
      ZoomSDK['ZoomInternal']['ZoomCustomization']['currentCustomization']['feedbackCustomization']['textFont']
    document['getElementById'](_0x25e638['feedback'])['style']['color'] =
      ZoomSDK['ZoomInternal']['ZoomCustomization']['currentCustomization']['feedbackCustomization']['textColor']
    _0x3a681a = document['createElement']('div')
    _0x3a681a['id'] = _0x25e638['imageWrapper']
    _0x3a681a['appendChild'](_0x152158)
    var _0x2925c0 = document['createElement']('div')
    _0x2925c0['id'] = _0x25e638['version']
    _0x2925c0['innerHTML'] = 'v' + ZoomSDK['ZoomInternal']['Constants']['ZOOM_VERSION']()
    _0x3a681a['appendChild'](_0x2925c0)
    var _0x25c8dd = document['createElement']('div')
    _0x25c8dd['id'] = 'zoom-below-oval'
    _0x25c8dd['style']['position'] = 'absolute'
    _0x25c8dd['style']['bottom'] = '4%'
    _0x25c8dd['style']['left'] = '50%'
    _0x25c8dd['style']['transform'] = 'translateX(-50%)'
    _0x25c8dd['style']['width'] = 'auto'
    _0x25c8dd['style']['height'] = 'auto'
    _0x25c8dd['appendChild'](_0x3a681a)
    var _0x3b23cb = document['getElementById']('zoom-outside-interface-wrapper')
    _0x3b23cb['style']['opacity'] = 0x0
    document['getElementsByClassName']('videoWrapper')[0x0]['insertBefore'](
      _0xf8c32f,
      document['getElementsByClassName']('videoWrapper')[0x0]['firstChild']
    )
    _0x3b23cb['appendChild'](_0x25c8dd)
    _0x5033fa = document['getElementById'](_0x25e638['xCancel'])
    document['getElementById'](_0x25e638['xCancel'])['style']['top'] = 0x0
    switch (
      ZoomSDK['ZoomInternal']['ZoomCustomization']['currentCustomization']['cancelButtonCustomization']['location']
    ) {
      case ZoomSDK['ZoomInternal']['ZoomCustomization']['ZoomCancelButtonLocation']['TopLeft']:
        document['getElementById'](_0x25e638['xCancel'])['style']['left'] = 0x0
        document['getElementById'](_0x25e638['xCancel'])['style']['padding'] = '10px'
        break
      case ZoomSDK['ZoomInternal']['ZoomCustomization']['ZoomCancelButtonLocation']['TopRight']:
        document['getElementById'](_0x25e638['xCancel'])['style']['right'] = 0x0
        document['getElementById'](_0x25e638['xCancel'])['style']['padding'] = '10px'
        break
      case ZoomSDK['ZoomInternal']['ZoomCustomization']['ZoomCancelButtonLocation']['Disable']:
        document['getElementById'](_0x25e638['xCancel'])['style']['visibility'] = 'hidden'
        break
      default:
        document['getElementById'](_0x25e638['xCancel'])['style']['padding'] = '10px'
        console['warn'](
          'Invalid\x20Cancel\x20Button\x20Customization:',
          ZoomSDK['ZoomInternal']['ZoomCustomization']['currentCustomization']['cancelButtonCustomization']['location']
        )
        break
    }
    _0x5033fa['style']['opacity'] = 0x0
    _0x3a681a['style']['opacity'] = 0x0
    _0x5033fa['style']['display'] = 'none'
    _0x3b23cb['style']['opacity'] = 0x1
    ZoomSDK['ZoomInternal']['ZoomString']['init']()
    ZoomSDK['ZoomInternal']['ZoomInterface']['Oval']['init']({
      canvasHeight: _0x37a86b,
      canvasWidth: _0x159ced,
      captureWidth: Math['round'](
        (_0x37a86b / ZoomSDK['ZoomInternal']['FPA']['getCurrentSettings']()['cr']['height']) *
          ZoomSDK['ZoomInternal']['FPA']['getCurrentSettings']()['cr']['width']
      )
    })
  }
  function _0x486eb6() {
    _0x43e226['style']['display'] = 'block'
    ZoomSDK['ZoomInternal']['ZoomInterface']['Oval']['show']()
    document['getElementById'](_0x25e638['feedback'])['style']['opacity'] = 0x1
    document['getElementById']('zoom-outside-interface-wrapper')['style']['opacity'] = 0x1
    document['getElementById']('zoom-version')['classList']['remove']('versionDisplay')
    _0x5033fa['style']['opacity'] = 0x1
    _0x3a681a['style']['opacity'] = 0x0
    _0x5033fa['style']['display'] = 'block'
  }
  function _0x4f018b(_0x4e199c, _0x4b3e80) {
    var _0x2ed0c5 = document['getElementById'](_0x25e638['feedbackContainer'])
    if (!_0x2ed0c5) {
      _0x4b3e80()
      return
    }
    _0x2ed0c5['classList']['remove']('zoom-feedback-containter-animation-in')
    _0x2ed0c5['classList']['add']('zoom-feedback-containter-animation-out')
    _0x5033fa['style']['opacity'] = 0x0
    _0x3a681a['style']['opacity'] = 0x0
    _0x5033fa['style']['display'] = 'none'
    var _0x53721d =
      ZoomSDK['ZoomInternal']['ZoomCustomization']['currentCustomization']['exitAnimationCustomization'][
        'exitAnimationSuccess'
      ]
    if (_0x4e199c) {
      _0x53721d =
        ZoomSDK['ZoomInternal']['ZoomCustomization']['currentCustomization']['exitAnimationCustomization'][
          'exitAnimationUnsuccess'
        ]
    }
    switch (_0x53721d) {
      case ZoomSDK['ZoomExitAnimationStyle']['None']:
        document['getElementById']('zoom-oval-svg')['style']['opacity'] = 0x0
        _0x4b3e80()
        break
      case ZoomSDK['ZoomExitAnimationStyle']['FadeOutMin']:
        var _0x4ded32 = 0xc8
        ZoomSDK['ZoomInternal']['UIFunctions']['fadeOut'](
          document['getElementById']('zoom-oval-svg'),
          0x0,
          _0x4ded32,
          function() {
            _0x4b3e80()
          }
        )
        break
      case ZoomSDK['ZoomExitAnimationStyle']['RippleOut']:
        ZoomSDK['ZoomInternal']['ZoomInterface']['Oval']['ripple']()
        ZoomSDK['ZoomInternal']['UIFunctions']['fadeOut'](
          document['getElementById']('zoom-oval-svg'),
          0x0,
          0x2ee,
          function() {
            _0x4b3e80()
          }
        )
        break
      default:
        console['warn'](
          'Zoom\x20Invalid\x20Exit\x20Animation:',
          ZoomSDK['ZoomInternal']['ZoomCustomization']['currentCustomization']['exitAnimationCustomization']
        )
    }
  }
  function _0x4f8527() {
    document['getElementById'](_0x25e638['feedback'])['innerHTML'] = ZoomSDK['ZoomInternal']['Px'][
      'getFriendlyStringForFeedbackSignal'
    ](ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['FACE_NOT_FOUND'])
    ZoomSDK['ZoomInternal']['UIFunctions']['fadeIn'](
      document['getElementById']('zoom-oval-svg'),
      0x1,
      0x1f4,
      function() {
        _0x5033fa['style']['display'] = 'block'
        ZoomSDK['ZoomInternal']['UIFunctions']['fadeIn'](_0x5033fa, 0x1, 0x0)
        ZoomSDK['ZoomInternal']['UIFunctions']['fadeIn'](_0x3a681a, 0x1, 0x0)
        document['getElementById'](_0x25e638['feedbackContainer'])['style']['opacity'] = 0x0
        _0x4f1125()
        document['getElementById'](_0x25e638['feedbackContainer'])['classList']['remove'](
          'zoom-feedback-containter-animation-out'
        )
        document['getElementById'](_0x25e638['feedbackContainer'])['classList']['add'](
          'zoom-feedback-containter-animation-in'
        )
      }
    )
    ZoomSDK['ZoomInternal']['State']['setIsCapturingZoom']()
  }
  function _0x4f1125() {
    document['getElementById'](_0x25e638['feedback'])['style']['display'] = 'block'
    document['getElementById'](_0x25e638['feedback'])['classList']['remove']('fade-out-zoom-ui')
    document['getElementById'](_0x25e638['feedback'])['classList']['add']('fade-in-zoom-ui')
  }
  function _0x461568(_0x5b15b1) {
    if (typeof document['hidden'] !== 'undefined') {
      _0x4794ba = 'hidden'
      _0x267e96 = 'visibilitychange'
    } else if (typeof document['msHidden'] !== 'undefined') {
      _0x4794ba = 'msHidden'
      _0x267e96 = 'msvisibilitychange'
    } else if (typeof document['webkitHidden'] !== 'undefined') {
      _0x4794ba = 'webkitHidden'
      _0x267e96 = 'webkitvisibilitychange'
    }
    var _0xbaee1a = !![]
    function _0xdc9788() {
      if (_0xbaee1a) {
        return
      }
      _0xbaee1a = !![]
    }
    function _0x38aa72() {
      if (!_0xbaee1a) {
        return
      }
      try {
        ZoomSDK['ZoomInternal']['Zoom']['cancelZoomSession']('context')
      } catch (_0x5f0e54) {
        return
      }
      _0xbaee1a = ![]
    }
    function _0x219a20() {
      if (!ZoomSDK) {
        return
      }
      if (_0x4cf00a() || _0xe28e9b !== _0x11f245) {
        _0x11f245 = _0xe28e9b
        ZoomSDK['ZoomInternal']['Zoom']['cancelZoomSession']('orientation')
      }
    }
    function _0xb8abee() {
      if (!ZoomSDK) {
        return
      }
      if (document[_0x4794ba] || !document['hasFocus']()) {
        return _0x38aa72()
      }
      return _0xdc9788()
    }
    if (typeof document['addEventListener'] === 'undefined' || _0x4794ba === undefined) {
      console['log']('The\x20Page\x20Visibility\x20API\x20is\x20not\x20supported\x20in\x20this\x20browser.')
    } else {
      if (!_0x5b15b1) {
        document['addEventListener'](_0x267e96, _0xb8abee, ![])
        window['onblur'] = _0x38aa72
        window['onfocus'] = _0xdc9788
        window['addEventListener']('resize', _0x219a20)
      } else {
        document['removeEventListener'](_0x267e96, _0xb8abee, ![])
        window['removeEventListener']('resize', _0x219a20)
      }
    }
  }
  _0x461568()
  function _0x4cf00a() {
    _0xe28e9b = window['innerWidth'] > window['innerHeight'] ? 'L' : 'P'
    if (!_0x11f245) {
      _0x11f245 = _0xe28e9b
    }
    var _0x2491af = _0xe28e9b === 'L' && ZoomSDK['getBrowserSupport']()['DetectRTC']['osName'] === 'iOS'
    return _0x2491af
  }
  function _0xc3f533() {
    _0x461568(!![])
    ZoomSDK['ZoomInternal']['ZoomInterface']['Oval']['unload']()
    try {
      if (
        _0x25e638 &&
        _0x25e638['userCreatedZoomContainerID'] &&
        document['getElementById'](_0x25e638['userCreatedZoomContainerID'])
      ) {
        document['getElementById'](_0x25e638['userCreatedZoomContainerID'])['innerHTML'] = ''
      }
    } catch (_0x5bed91) {}
  }
  return {
    setupZoomDOM: function(_0x54ab36, _0x51aafa) {
      _0xd3df88(_0x54ab36, _0x51aafa)
    },
    isZoomInterfacePrepared: function() {
      return _0x25e638['ovalFaceSpinner'] && document['getElementById'](_0x25e638['ovalFaceSpinner']) !== null
    },
    setupZoomInterface: function() {
      _0x486eb6()
    },
    transitionFromZoom: function(_0x5b659c, _0x42f8f1) {
      _0x4f018b(_0x5b659c, _0x42f8f1)
    },
    turnOnZoomFeedbackContainer: function(_0x4cb6ef) {
      _0x4f8527(_0x4cb6ef)
    },
    showFeedBack: function(_0x5d781b) {
      _0x4f1125(_0x5d781b)
    },
    getImageSizes: function() {
      return {
        requiredAspectRatio: _0x4f8a13,
        finalImageHeight: _0x59d146,
        finalImageWidth: _0x231ab1,
        canvasHeight: _0x37a86b,
        canvasWidth: _0x159ced
      }
    },
    zoomDomElements: _0x25e638,
    isMobileDeviceInLandscapeMode: function() {
      return _0x4cf00a()
    },
    unloadResources: function() {
      _0xc3f533()
    }
  }
})()
ZoomSDK['ZoomInternal']['Timer'] = function() {
  this['count'] = 0x0
  this['totalTime'] = 0x0
  this['currentTimeStamp'] = 0x0
  this['init'] = function() {
    this['count'] = 0x0
    this['totalTime'] = 0x0
    this['currentTimeStamp'] = 0x0
  }
  this['start'] = function() {
    this['currentTimeStamp'] = Date['now']()
  }
  this['stop'] = function() {
    this['totalTime'] += Date['now']() - this['currentTimeStamp']
    this['count']++
  }
}
ZoomSDK['ZoomInternal']['FPA'] = (function() {
  if (typeof window === 'undefined') {
    return
  }
  var _0x39399c = null
  var _0x541773
  var _0x5994a5
  var _0x3c56d5 = null
  var _0x1f86ff = 0x0
  var _0x42b5e7
  var _0x5468fe = 0x50
  var _0x47fed2
  var _0x7a206e
  var _0x5be42f = null
  var _0x3bfb5f = 0x2d
  var _0x32525f = _0x3bfb5f
  var _0x200c57
  var _0x46bbe1
  var _0x570d9e
  var _0xaee285
  var _0xbdc09d
  var _0x4216d6
  var _0x1d2a37
  var _0x2a157f = 0x0
  var _0x2a07b0 = {
    timeout: _0x3bfb5f,
    time: 0x0,
    imageCount: 0x0,
    maxTime: 0x0,
    minTime: 0x3e8,
    thumbnailToUriTime: { ti: 0x0, ct: 0x0 },
    highResToUriTime: { ti: 0x0, ct: 0x0 },
    standardToUriTime: { ti: 0x0, ct: 0x0 }
  }
  var _0x5cf9a9 = Object['assign']({}, _0x2a07b0)
  var _0x4b43ec = 0x0
  var _0x26664d = -0x3e8
  var _0x4a8677 = 0.9
  var _0x29d077
  var _0x2a72b4 = new ZoomSDK['ZoomInternal']['Timer']()
  var _0x3a79cd = new ZoomSDK['ZoomInternal']['Timer']()
  function _0x4b7b7a() {
    var _0x54edec = Date['now']()
    _0x541773 = _0x46bbe1['toDataURL']('image/jpeg', _0x4a8677)
    _0x5cf9a9['standardToUriTime']['ti'] += Date['now']() - _0x54edec
    _0x5cf9a9['standardToUriTime']['ct']++
  }
  function _0x5dc143() {
    var _0x4291c0 = Date['now']()
    _0x5994a5 = _0xaee285['toDataURL']('image/jpeg', 0.2)
    _0x5cf9a9['thumbnailToUriTime']['ti'] += Date['now']() - _0x4291c0
    _0x5cf9a9['thumbnailToUriTime']['ct']++
  }
  function _0x220207() {
    _0x46bbe1 = document['createElement']('canvas')
    _0x570d9e = _0x46bbe1['getContext']('2d', { alpha: ![] })
    _0xaee285 = document['createElement']('canvas')
    _0xbdc09d = _0xaee285['getContext']('2d', { alpha: ![] })
  }
  function _0x371076(_0x513281) {
    if (_0x42b5e7) {
      if (_0x513281) {
        _0x513281()
      }
      return
    }
    var _0x2bab5b = ZoomSDK['zoomResourceDirectory']() + '/3a4b797006cfdb1c6b9d47dc24c4ffbe38684c82'
    _0x42b5e7 = new Worker(_0x2bab5b)
    _0x42b5e7['onmessage'] = function(_0x536159) {
      var _0x51af1a
      switch (_0x536159['data']['process']) {
        case 'preload':
          _0x42b5e7['postMessage']({ process: 'preload', showDebugData: ![] })
          if (_0x513281) {
            _0x513281()
          }
          break
        case 'init':
          break
        case 'live':
          _0x2a72b4['stop']()
          _0x51af1a = _0x536159['data']['faceResult']
          if (_0x51af1a['rect']['bottom'] !== 0x0) {
            var _0x1b3c6a = _0x51af1a['points'][0x0]['x'] / _0x46bbe1['width']
            var _0x2b4e33 = _0x51af1a['points'][0x10]['x'] / _0x46bbe1['width']
            _0x51af1a[ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_NORMALIZED_RIGHT_TEMPLE_X']] = _0x1b3c6a
            _0x51af1a[ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_NORMALIZED_LEFT_TEMPLE_X']] = _0x2b4e33
            var _0x5c8a0c = _0x2b4e33 - _0x1b3c6a
            _0x51af1a[ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_IMAGE_WIDTH_AT_FACE_DETECTION']] =
              _0x46bbe1['width']
            _0x51af1a[
              ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_NORMALIZED_WIDTH_FROM_TEMPLES']
            ] = _0x5c8a0c
            _0x51af1a[ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_SIZECLASS_FROM_TEMPLE']] = ZoomSDK[
              'ZoomInternal'
            ]['Px']['computeFaceSizeClassFromNormalizedFaceSizeFromTemples'](_0x5c8a0c)
            var _0x4f248a = ZoomSDK['ZoomInternal']['FTComputeFaceFeedback']['faceFeedback'](
              _0x51af1a,
              _0x46bbe1['width'],
              { cols: _0x46bbe1['width'], rows: _0x46bbe1['height'] }
            )
            _0x51af1a['file'] = _0x4f248a['file']
            _0x51af1a[ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_IN_FRAME_IMAGE']] = ZoomSDK['ZoomInternal'][
              'Px'
            ]['templePointsAreInFrame'](_0x51af1a)
          } else {
            _0x51af1a[ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_NORMALIZED_RIGHT_TEMPLE_X']] = 0x0
            _0x51af1a[ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_NORMALIZED_LEFT_TEMPLE_X']] = 0x0
            _0x51af1a[ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_NORMALIZED_WIDTH_FROM_TEMPLES']] = 0x0
            _0x51af1a['file'] = {}
            _0x51af1a['file'][ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_FTE_REASON']] =
              ZoomSDK['ZoomInternal']['Px']['Constants']['PhFTEReason']['FACE_NOT_FOUND']
            _0x51af1a['file']['fnkey_FACE_FEEDBACK_WHEN_LOOKING_FOR_UNZOOMED'] =
              ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['FACE_NOT_FOUND']
            _0x51af1a['file']['fnkey_FACE_FEEDBACK_WHEN_LOOKING_FOR_ZOOMED'] =
              ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['FACE_NOT_FOUND']
          }
          if (_0x51af1a['rect'] && _0x51af1a['rect']['bottom'] !== 0x0) {
            _0x4b7b7a()
          }
          _0x3a79cd['stop']()
          ZoomSDK['ZoomInternal']['Zoom']['onZoomFeedback']({
            faceResult: _0x51af1a,
            image: _0x541773,
            thumbnail: _0x5994a5,
            highRes: _0x3c56d5,
            frameIndex: _0x51af1a['frameIndex'],
            feedbackTime: _0x3a79cd['totalTime']
          })
          _0x1d2a37 = ![]
          break
        case 'validateLicense':
          var _0x102ae4 = _0x536159['data']['validateLicenseResult']
          _0x29d077(_0x102ae4)
          break
        default:
          console['warn']('Unexpected\x20response\x20from\x20ZoOm\x20core\x20worker.')
      }
    }
  }
  function _0xeae994() {
    if (_0x42b5e7) {
      _0x42b5e7['terminate']()
      _0x42b5e7 = null
    }
  }
  function _0x301c8c() {
    if (_0x1f86ff < 0x0) {
      return
    }
    var _0x52b43f = Date['now']() - _0x2a157f
    if (_0x52b43f < _0x32525f) {
      return
    }
    _0x2a157f = Date['now']()
    if (_0x5cf9a9['time'] !== 0x0) {
      if (_0x52b43f > _0x5cf9a9['maxTime']) {
        _0x5cf9a9['maxTime'] = _0x52b43f
      }
      if (_0x52b43f < _0x5cf9a9['minTime']) {
        _0x5cf9a9['minTime'] = _0x52b43f
      }
    }
    _0x5cf9a9['time'] += _0x52b43f
    _0x5cf9a9['imageCount'] += 0x1
    if (
      _0x4b43ec === _0x26664d &&
      ZoomSDK['ZoomInternal']['State']['zoomPhase'] !== ZoomSDK['ZoomInternal']['ZoomPhases']['LookingForFirstZoomed']
    ) {
      _0x4b43ec++
      return
    }
    _0x4b43ec++
    _0x26664d = _0x4b43ec
    if (!_0x1d2a37) {
      _0x1d2a37 = !![]
      _0x3a79cd['init']()
      _0x3a79cd['start']()
      _0x541773 = null
      _0x3c56d5 = null
      _0x570d9e['drawImage'](
        _0x200c57,
        _0x5be42f['left'],
        _0x5be42f['top'],
        _0x5be42f['width'],
        _0x5be42f['height'],
        0x0,
        0x0,
        _0x46bbe1['width'],
        _0x46bbe1['height']
      )
      if (ZoomSDK['ZoomInternal']['currentApplicationSettings']()['SendDiagnosticsToFaceTec']) {
        _0xbdc09d['drawImage'](
          _0x200c57,
          _0x5be42f['left'],
          _0x5be42f['top'],
          _0x5be42f['width'],
          _0x5be42f['height'],
          0x0,
          0x0,
          _0xaee285['width'],
          _0xaee285['height']
        )
        _0x5dc143()
      }
      var _0x7a6c5 = { process: 'live', frameIndex: _0x4b43ec }
      _0x4216d6 = _0x570d9e['getImageData'](0x0, 0x0, _0x46bbe1['width'], _0x46bbe1['height'])
      _0x2a72b4['start']()
      _0x42b5e7['postMessage'](
        {
          inUnzoomedPhase:
            ZoomSDK['ZoomInternal']['State']['zoomPhase'] ===
            ZoomSDK['ZoomInternal']['ZoomPhases']['ShouldShowUnzoomed'],
          nonImageData: _0x7a6c5,
          image: _0x4216d6['data']['buffer']
        },
        [_0x4216d6['data']['buffer']]
      )
    }
  }
  function _0x13402e(_0x506e51) {
    _0x200c57 = _0x506e51
    var _0x3c12b7 = _0x506e51['videoWidth']
    var _0x844f29 = _0x506e51['videoHeight']
    var _0x3369b2
    _0x5be42f = { left: 0x0, top: 0x0, width: 0x0, height: 0x0 }
    if (_0x844f29 > _0x3c12b7) {
      _0x3369b2 = _0x3c12b7 / _0x844f29
      _0x47fed2 = _0x844f29
      _0x7a206e = _0x3c12b7
      _0x5be42f['width'] = _0x3c12b7
      _0x5be42f['height'] = _0x844f29
    } else {
      _0x3369b2 = ZoomSDK['ZoomInternal']['ZoomInterface']['getImageSizes']()['requiredAspectRatio']
      _0x7a206e = Math['round'](_0x844f29 * _0x3369b2)
      if (_0x7a206e > _0x3c12b7) {
        _0x47fed2 = Math['round'](_0x3c12b7 / _0x3369b2)
        _0x7a206e = _0x3c12b7
        _0x5be42f['top'] = Math['round']((_0x844f29 - _0x47fed2) / 0x2)
      } else {
        _0x47fed2 = _0x844f29
      }
      _0x5be42f['left'] = Math['round']((_0x3c12b7 - _0x7a206e) / 0x2)
      _0x5be42f['width'] = _0x7a206e
      _0x5be42f['height'] = _0x47fed2
    }
    if (_0x47fed2 > 0x280) {
      _0x46bbe1['height'] = 0x280
      _0x46bbe1['width'] = 0x280 * _0x3369b2
    } else {
      _0x46bbe1['height'] = _0x47fed2
      _0x46bbe1['width'] = _0x47fed2 * _0x3369b2
    }
    if (ZoomSDK['ZoomInternal']['currentApplicationSettings']()['SendDiagnosticsToFaceTec']) {
      _0xaee285['width'] = _0x5468fe
      _0xaee285['height'] =
        _0x5468fe / ZoomSDK['ZoomInternal']['ZoomInterface']['getImageSizes']()['requiredAspectRatio']
    }
    _0x42b5e7['postMessage']({ process: 'init', imageWidth: _0x46bbe1['width'], imageHeight: _0x46bbe1['height'] })
    _0x1f86ff = -0x1
    function _0x25bb30() {
      if (_0x1f86ff >= 0x0) {
        _0x1f86ff = requestAnimationFrame(_0x25bb30)
        _0x301c8c()
      }
    }
    this['start'] = function() {
      _0x4b43ec = 0x0
      _0x2a72b4['init']()
      _0x3a79cd['init']()
      _0x26664d = -0x3e8
      _0x5cf9a9 = Object['assign']({}, _0x2a07b0)
      _0x2a157f = Date['now']()
      _0x1f86ff = 0x0
      _0x25bb30()
    }
    this['stop'] = function() {
      cancelAnimationFrame(_0x1f86ff)
      _0x1f86ff = -0x1
    }
  }
  function _0x55a6cd(_0x19fadc, _0x2ef83c, _0x23e72f) {
    _0x29d077 = _0x23e72f
    _0x42b5e7['postMessage']({ process: 'validateLicense', apptoken: _0x19fadc, license: _0x2ef83c })
  }
  return {
    start: function() {
      if (_0x39399c) {
        _0x39399c['start']()
      }
    },
    stop: function() {
      if (_0x39399c) {
        _0x39399c['stop']()
      }
    },
    loadresources: function(_0x28beee) {
      _0x371076(_0x28beee)
    },
    initDomCanvasElementsForVideoProcessing: function() {
      _0x220207()
    },
    unloadResources: function() {
      if (_0x39399c) {
        _0x39399c['stop']()
      }
      _0xeae994()
    },
    loadVideoProcessor: function(_0x5b40a0) {
      _0x39399c = new _0x13402e(_0x5b40a0)
    },
    validateLicenseWithWasm: function(_0x36c523, _0x4fbded, _0x1aed40) {
      _0x55a6cd(_0x36c523, _0x4fbded, _0x1aed40)
    },
    getCurrentSettings: function() {
      return {
        is: ZoomSDK['ZoomInternal']['ZoomInterface']['getImageSizes'](),
        tw: _0x5468fe,
        jc: _0x4a8677,
        cr: _0x5be42f,
        ctd: {
          iv: _0x5cf9a9['timeout'],
          tt: _0x5cf9a9['time'],
          ic: _0x5cf9a9['imageCount'],
          mxt: _0x5cf9a9['maxTime'],
          mit: _0x5cf9a9['minTime'],
          ttt: _0x5cf9a9['thumbnailToUriTime'],
          htt: _0x5cf9a9['highResToUriTime'],
          stt: _0x5cf9a9['standardToUriTime'],
          wtt: _0x2a72b4['totalTime'] / _0x2a72b4['count']
        }
      }
    }
  }
})()
ZoomSDK['ZoomInternal']['Px'] = (function() {
  var _0x65fe71 = 0.095
  var _0x578d5d = 0.5
  _0x578d5d = 0.525
  var _0xc29a56 = 0.6
  _0xc29a56 = 0.565
  var _0x34fe1d = 0.8
  _0x34fe1d = 0.825
  _0x34fe1d = 0.825
  _0x34fe1d = 0.83
  var _0x11b9f9 = 0.91
  var _0x30a481 = 1.1
  var _0x59bf8c = { SUZ: 0.5, UNZ: 0.6, BUZ: 0.8, ZOO: 0.95, BTZ: 1.1 }
  var _0x20f63c = 0.04
  var _0x20e83c = _0x59bf8c['UNZ'] + _0x20f63c
  var _0x223d41 = _0x59bf8c['UNBUZ'] - _0x20f63c
  var _0x49032d
  var _0x5d4de7 = {
    HOLD_STEADY: 0x0,
    FACE_NOT_FOUND: 0x1,
    MOVE_FACE_CLOSER: 0x2,
    MOVE_FACE_EVEN_CLOSER: 0x3,
    MOVE_FACE_FURTHER_AWAY: 0x4,
    MOVE_FACE_AWAY_A_LITTLE: 0x5,
    FACE_CENTERED_TOO_FAR_TOP: 0x6,
    FACE_CENTERED_TOO_FAR_BOTTOM: 0x7,
    NOT_CENTERED: 0x8,
    FACE_CENTERED_TOO_FAR_LEFT: 0x9,
    FACE_CENTERED_TOO_FAR_RIGHT: 0xa,
    FACE_ROTATED_TOO_FAR_LEFT: 0xb,
    FACE_ROTATED_TOO_FAR_RIGHT: 0xc,
    MOVE_PHONE_TO_EYE_LEVEL: 0xd,
    FACE_NOT_LOOKING_STRAIGHT_AHEAD: 0xe,
    USE_EVEN_LIGHTING: 0xf
  }
  var _0x3679f7 = function(_0x2b2067) {
    if (_0x2b2067 < _0x578d5d) {
      return ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceSizeCategory']['SMALLER_THAN_UNZOOMED']
    } else if (_0x2b2067 < _0xc29a56) {
      return ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceSizeCategory']['UNZOOMED']
    } else if (_0x2b2067 < _0x34fe1d) {
      return ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceSizeCategory']['BETWEEN_UNZOOMED_AND_ZOOMED']
    } else if (_0x2b2067 < _0x11b9f9) {
      return ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceSizeCategory']['ZOOMED']
    } else {
      return ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceSizeCategory']['BIGGER_THAN_ZOOMED']
    }
  }
  var _0x5c4946 = function(_0x3361cd, _0x29988a, _0x3b8fac) {
    var _0x236372 = ZoomSDK['ZoomInternal']['Px']['Constants']['TOO_CLOSE_LEFT_RIGHT_BORDER_PERCENTAGE']
    if (_0x3b8fac) {
      _0x236372 = 0x0
    }
    if (_0x3361cd < _0x236372) {
      return ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceCenterednessCategory']['FACE_CENTERED_TOO_FAR_LEFT']
    } else if (_0x29988a > 0x1 - _0x236372) {
      return ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceCenterednessCategory']['FACE_CENTERED_TOO_FAR_RIGHT']
    } else {
      return ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceCenterednessCategory']['CENTERED']
    }
  }
  var _0x440f8e = function(_0x211412, _0x489f2e, _0x298a86) {
    var _0x122fd7 = _0x211412['left'] / _0x489f2e['cols']
    var _0x180f30 = _0x211412['right'] / _0x489f2e['cols']
    var _0x55342d = ZoomSDK['ZoomInternal']['Px']['Constants']['TOO_CLOSE_LEFT_RIGHT_CASCADE']
    var _0x373ae8 = ZoomSDK['ZoomInternal']['Px']['Constants']['TOO_CLOSE_LEFT_RIGHT_CASCADE']
    if (_0x298a86) {
      _0x55342d = 0x0
      _0x373ae8 = 0x0
    }
    if (_0x122fd7 < _0x55342d) {
      return ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceCenterednessCategory']['FACE_CENTERED_TOO_FAR_LEFT']
    } else if (0x1 - _0x180f30 < _0x55342d) {
      return ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceCenterednessCategory']['FACE_CENTERED_TOO_FAR_RIGHT']
    } else {
      var _0x51617f = (_0x122fd7 + _0x180f30) / 0x2
      var _0x28583b = Math['abs'](_0x51617f - 0.5)
      var _0xef6d27 = 0.07
      if (_0x298a86) {
        _0xef6d27 = 0.05
      }
      if (_0x28583b < _0xef6d27) {
        return ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceCenterednessCategory']['CENTERED']
      } else {
        var _0x17f171 = _0x51617f - 0.5
        if (_0x17f171 < 0x0) {
          return ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceCenterednessCategory'][
            'FACE_CENTERED_TOO_FAR_LEFT'
          ]
        } else {
          return ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceCenterednessCategory'][
            'FACE_CENTERED_TOO_FAR_RIGHT'
          ]
        }
      }
    }
  }
  var _0x37bb99 = function(_0x47a975, _0x98b1a0, _0x27966d) {
    var _0xdbb29a = _0x47a975['top'] / _0x98b1a0['rows']
    var _0x29c309 = _0x47a975['bottom'] / _0x98b1a0['rows']
    var _0x3a197a = _0x98b1a0['rows'] / _0x98b1a0['cols']
    var _0x3f9bcf = ZoomSDK['ZoomInternal']['Px']['Constants']['isLowAspectRatio'](_0x3a197a)
    var _0x589f31 = _0x3f9bcf
      ? ZoomSDK['ZoomInternal']['Px']['Constants']['TOO_CLOSE_TOP_CASCADE_LOW_ASPECT']
      : ZoomSDK['ZoomInternal']['Px']['Constants']['TOO_CLOSE_TOP_CASCADE']
    var _0x339c9b = _0x3f9bcf
      ? ZoomSDK['ZoomInternal']['Px']['Constants']['TOO_CLOSE_TOPBOTTOM_BORDER_PERCENTAGE_LOW_ASPECT']
      : ZoomSDK['ZoomInternal']['Px']['Constants']['TOO_CLOSE_TOPBOTTOM_BORDER_PERCENTAGE']
    if (_0x27966d) {
      _0x589f31 = -0x1
      _0x339c9b = -0x1
    }
    if (_0xdbb29a < _0x589f31) {
      return ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceCenterednessCategory']['FACE_CENTERED_TOO_FAR_TOP']
    } else if (0x1 - _0x29c309 < _0x339c9b) {
      return ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceCenterednessCategory']['FACE_CENTERED_TOO_FAR_BOTTOM']
    } else {
      var _0x284d9c = (_0x29c309 + _0xdbb29a) / 0x2
      var _0xf9bff1 = Math['abs'](_0x284d9c - 0.5)
      var _0x32d7fe = 0.15
      if (_0x27966d) {
        _0x32d7fe = 0x1
      }
      if (_0xf9bff1 < _0x32d7fe) {
        return ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceCenterednessCategory']['CENTERED']
      } else {
        return ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceCenterednessCategory']['NOT_CENTERED']
      }
    }
  }
  var _0x106d1d = function(_0x16b48e, _0x3790a8) {
    var _0x47f42f =
      (Math['atan2'](_0x3790a8['y'] - _0x16b48e['y'], _0x3790a8['x'] - _0x16b48e['x']) * 0xb4) / Math['PI'] + 0xb4
    if (_0x47f42f > 0xb4) {
      _0x47f42f = _0x47f42f - 0x168
    }
    return _0x47f42f
  }
  var _0x43aa66 = function(_0x7c9588, _0xbe35b2) {
    var _0x47767c = -4.5
    var _0x555f05 = 4.5
    if (_0xbe35b2) {
      _0x47767c = -0x5a
      _0x555f05 = 0x5a
    }
    if (_0x7c9588 < _0x47767c) {
      return ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceUprightness']['FACE_ROTATED_TOO_FAR_LEFT']
    }
    if (_0x7c9588 < _0x555f05) {
      return ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceUprightness']['FACE_UPRIGHT']
    }
    return ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceUprightness']['FACE_ROTATED_TOO_FAR_RIGHT']
  }
  var _0xe28b44 = function(_0x7b26ab) {
    if (_0x7b26ab < -_0x65fe71) {
      return ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceYaw']['FACE_LOOKING_TOO_FAR_LEFT']
    }
    if (_0x7b26ab < _0x65fe71) {
      return ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceYaw']['FACE_LOOKING_STRAIGHT_AHEAD']
    }
    return ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceYaw']['FACE_LOOKING_TOO_FAR_RIGHT']
  }
  var _0x7f25e2 = function(_0x2db00e) {
    return Math['abs'](_0x59bf8c['BUZ'] - (_0x59bf8c['BUZ'] - _0x59bf8c['UNZ']) / 0x2 - _0x2db00e)
  }
  var _0x532259 = function(_0x29cae4) {
    return Math['abs'](_0x59bf8c['UNZ'] - (_0x59bf8c['UNZ'] - _0x59bf8c['SUZ']) / 0x2 - _0x29cae4)
  }
  var _0x5569af = function(_0x2ecaf2) {
    return Math['abs'](_0x59bf8c['ZOO'] - (_0x59bf8c['ZOO'] - _0x59bf8c['BUZ']) / 0x2 - _0x2ecaf2)
  }
  function _0x34a7ee(_0x53e40b) {
    if (!_0x49032d) {
      _0x49032d = ZoomSDK['getBrowserSupport']()['isMobileDevice']
    }
    var _0x507386
    switch (_0x53e40b) {
      case _0x5d4de7['HOLD_STEADY']:
        _0x507386 = ZoomSDK['ZoomInternal']['ZoomStrings'][ZoomSDK['ZoomInternal']['ZoomString']['FeedbackHoldSteady']]
        break
      case _0x5d4de7['FACE_NOT_FOUND']:
        _0x507386 =
          ZoomSDK['ZoomInternal']['ZoomStrings'][ZoomSDK['ZoomInternal']['ZoomString']['FeedbackFaceNotFound']]
        break
      case _0x5d4de7['MOVE_FACE_CLOSER']:
        if (_0x49032d) {
          _0x507386 =
            ZoomSDK['ZoomInternal']['ZoomStrings'][ZoomSDK['ZoomInternal']['ZoomString']['FeedbackMovePhoneCloser']]
        } else {
          _0x507386 =
            ZoomSDK['ZoomInternal']['ZoomStrings'][ZoomSDK['ZoomInternal']['ZoomString']['FeedbackMoveCloserWeb']]
        }
        break
      case _0x5d4de7['MOVE_FACE_EVEN_CLOSER']:
        _0x507386 =
          ZoomSDK['ZoomInternal']['ZoomStrings'][ZoomSDK['ZoomInternal']['ZoomString']['FeedbackMoveWebEvenCloser']]
        break
      case _0x5d4de7['MOVE_FACE_FURTHER_AWAY']:
      case _0x5d4de7['MOVE_FACE_AWAY_A_LITTLE']:
        if (_0x49032d) {
          _0x507386 =
            ZoomSDK['ZoomInternal']['ZoomStrings'][ZoomSDK['ZoomInternal']['ZoomString']['FeedbackMovePhoneAway']]
        } else {
          _0x507386 =
            ZoomSDK['ZoomInternal']['ZoomStrings'][ZoomSDK['ZoomInternal']['ZoomString']['FeedbackMoveAwayWeb']]
        }
        break
      case _0x5d4de7['FACE_CENTERED_TOO_FAR_TOP']:
      case _0x5d4de7['FACE_CENTERED_TOO_FAR_BOTTOM']:
      case _0x5d4de7['FACE_CENTERED_TOO_FAR_LEFT']:
      case _0x5d4de7['FACE_CENTERED_TOO_FAR_RIGHT']:
      case _0x5d4de7['NOT_CENTERED']:
        _0x507386 = ZoomSDK['ZoomInternal']['ZoomStrings'][ZoomSDK['ZoomInternal']['ZoomString']['FeedbackCenterFace']]
        break
      case _0x5d4de7['FACE_ROTATED_TOO_FAR_LEFT']:
      case _0x5d4de7['FACE_ROTATED_TOO_FAR_RIGHT']:
        if (_0x49032d) {
          _0x507386 =
            ZoomSDK['ZoomInternal']['ZoomStrings'][
              ZoomSDK['ZoomInternal']['ZoomString']['FeedbackFaceNotUprightMobile']
            ]
        } else {
          _0x507386 =
            ZoomSDK['ZoomInternal']['ZoomStrings'][ZoomSDK['ZoomInternal']['ZoomString']['FeedbackFaceNotUpright']]
        }
        break
      case _0x5d4de7['MOVE_PHONE_TO_EYE_LEVEL']:
        if (_0x49032d) {
          _0x507386 =
            ZoomSDK['ZoomInternal']['ZoomStrings'][ZoomSDK['ZoomInternal']['ZoomString']['FeedbackMovePhoneToEyeLevel']]
        } else {
          _0x507386 =
            ZoomSDK['ZoomInternal']['ZoomStrings'][ZoomSDK['ZoomInternal']['ZoomString']['FeedbackMoveToEyeLevelWeb']]
        }
        break
      case _0x5d4de7['FACE_NOT_LOOKING_STRAIGHT_AHEAD']:
        _0x507386 =
          ZoomSDK['ZoomInternal']['ZoomStrings'][
            ZoomSDK['ZoomInternal']['ZoomString']['FeedbackFaceNotLookingStraightAhead']
          ]
        break
      case _0x5d4de7['USE_EVEN_LIGHTING']:
        _0x507386 =
          ZoomSDK['ZoomInternal']['ZoomStrings'][ZoomSDK['ZoomInternal']['ZoomString']['FeedbackUseEvenLighting']]
        break
      default:
        throw _0x53e40b + '\x20not\x20found'
    }
    return _0x507386
  }
  var _0x55de60 = function(_0x4fd4a5, _0x20aaf6) {
    var _0x510779 = _0x4fd4a5['points']
    var _0x1ee6f7 = _0x4fd4a5['points'][0x0]
    var _0x7e0aa9 = _0x4fd4a5['points'][0x10]
    var _0x315bf7 = -0x14
    var _0x4dfc97 = _0x4fd4a5[ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_IMAGE_WIDTH_AT_FACE_DETECTION']] + 0x14
    if (_0x20aaf6 == !![]) {
      _0x315bf7 = -0x5
      _0x4dfc97 = _0x4fd4a5[ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_IMAGE_WIDTH_AT_FACE_DETECTION']] + 0x5
    } else {
      if (_0x3679f7(_0x510779) >= ZoomSDK['ZoomInternal']['Px'][_0x34fe1d]) {
        return !![]
      }
    }
    if (_0x1ee6f7['x'] >= _0x315bf7 && _0x7e0aa9['x'] <= _0x4dfc97) {
      return !![]
    } else {
      return ![]
    }
  }
  var _0x37f0fe = {
    r: _0x59bf8c,
    computeFaceSizeClassFromNormalizedFaceSizeFromTemples: function(_0x1828e4) {
      return _0x3679f7(_0x1828e4)
    },
    computeFaceSizeCenterednessFromTemples: function(_0x2fcd7b, _0xb9592a, _0x14a896) {
      return _0x5c4946(_0x2fcd7b, _0xb9592a, _0x14a896)
    },
    computeFaceSizeHorizontalCenterednessFromCascadeRect: function(_0x5027d7, _0x1fa3ed, _0xc0c012) {
      return _0x440f8e(_0x5027d7, _0x1fa3ed, _0xc0c012)
    },
    computeFaceSizeVerticalCenterednessFromCascadeRect: function(_0x199574, _0x4b7538, _0x982aa9) {
      return _0x37bb99(_0x199574, _0x4b7538, _0x982aa9)
    },
    computeAngleBetweenPoints: function(_0x39c325, _0x244ac7) {
      return _0x106d1d(_0x39c325, _0x244ac7)
    },
    getFriendlyStringForFeedbackSignal: function(_0x266476) {
      return _0x34a7ee(_0x266476)
    },
    computeFaceUprightness: function(_0x3a6cc1, _0x4d4987) {
      return _0x43aa66(_0x3a6cc1, _0x4d4987)
    },
    computeFaceYaw: function(_0x1d987f) {
      return _0xe28b44(_0x1d987f)
    },
    computeDistanceFromOptimumBetweenFrame: function(_0x3376f1) {
      return _0x7f25e2(_0x3376f1)
    },
    computeDistanceFromOptimumUnzoomedFrame: function(_0x30d1d4) {
      return _0x532259(_0x30d1d4)
    },
    computeDistanceFromOptimumZoomedFrame: function(_0x5560da) {
      return _0x5569af(_0x5560da)
    },
    templePointsAreInFrame: function(_0x4a27bf, _0x481846) {
      return _0x55de60(_0x4a27bf, _0x481846)
    },
    FaceFeedbackString: _0x5d4de7
  }
  return _0x37f0fe
})()
ZoomSDK['ZoomInternal']['Px']['Constants'] = (function() {
  var _0x2ab90b = 'FNKEY_FACE_NORMALIZED_WIDTH_FROM_TEMPLES'
  var _0x991246 = 'fnkey_NORMALIZED_RIGHT_TEMPLE_X'
  var _0x981158 = 'fnkey_NORMALIZED_LEFT_TEMPLE_X'
  var _0x57b080 = 'FNKEY_FACE_SIZECLASS_FROM_TEMPLE'
  var _0x219af0 = 'fnkey_FACE_FTE_REASON'
  var _0x441e3a = 'fnkey_FACE_FEEDBACK_WHEN_LOOKING_FOR_ZOOMED'
  var _0x2cc193 = 'fnkey_FACE_FEEDBACK_WHEN_LOOKING_FOR_UNZOOMED'
  var _0x5f41ea = 'fnkey_IMAGE_WIDTH_AT_FACE_DETECTION'
  var _0x503809 = 'FNKEY_FACE_UPRIGHTNESS_'
  var _0xe42b77 = 'fnkey_FACE_UPRIGHTNESS'
  var _0x56465b = 'FNKEY_FACE_ROTATION_ANGLE'
  var _0x52cace = 'FNKEY_VECTOR_ANGLE_'
  var _0x39753a = 'fnkey_FACE_YAW_COMPUTED'
  var _0xf81284 = 'fnkey_zoom_filter_consecutive_frames_count'
  var _0x307b3e = 'nte'
  var _0x3ab53f = 'fnkey_IN_FRAME_IMAGE'
  var _0xfeb75b = 'ZOOM_FACE_CENTEREDNESS_CATEGORY'
  var _0xbd1168 = 'ZOOM_DISTANCE_FROM_OPTIMAL_FRAME'
  var _0x4a4c56 = 0.64
  var _0x50dfb2 = 0.76
  var _0x527cdd = 0.05
  var _0x4cfe67 = 0.04
  var _0x273d4d = 0x10 / 0x9
  var _0x36471c = 0x4 / 0x3
  var _0xd5b662 = 1.7
  var _0x26d672 = 0.1
  var _0x32d742 = function(_0x69aeb7) {
    return _0x69aeb7 <= _0x36471c
  }
  var _0x5db4b0 = 0.055
  var _0x4283ce = _0x5db4b0 - _0x26d672
  var _0x239b12 = 0.085
  var _0x2b4227 = _0x239b12 - _0x26d672
  var _0x281129 = {
    FACE_NOT_FOUND: 0x0,
    EYES_NOT_FOUND: 0x1,
    INVALID_FACE_POSE_NOT_UPRIGHT: 0x2,
    INVALID_FACE_POSE_NOT_CENTERED_CASCADE: 0x3,
    INVALID_FACE_POSE_NOT_CENTERED_CHIN: 0x4,
    INVALID_FACE_POSE_NOT_CENTERED_TEMPLES: 0x5,
    INVALID_FACE_POSE_FACE_SIZE_SMALLER_THAN_UNZOOMED: 0x6,
    INVALID_FACE_POSE_FACE_SIZE_BIGGER_THAN_ZOOMED: 0x7,
    INVALID_FACE_POSE_FACE_SIZE_BETWEEN_UNZOOMED_AND_ZOOMED: 0x8,
    INVALID_FACE_POSE_NOT_LOOKING_STRAIGHT: 0x9,
    INVALID_FACE_POSE_NOT_EYE_LEVEL: 0xa,
    UNEVEN_LIGHTING: 0xb,
    INVALID_FACE_METRICS: 0xc,
    UNZOOMED_FRAME_AFTER_ENOUGH_CAPTURED: 0xd,
    INVALID_FACE_EYES_CLOSED: 0xe
  }
  var _0x44dcfd = {
    SMALLER_THAN_UNZOOMED: 0x0,
    UNZOOMED: 0x1,
    BETWEEN_UNZOOMED_AND_ZOOMED: 0x2,
    ZOOMED: 0x3,
    BIGGER_THAN_ZOOMED: 0x4
  }
  var _0x4d5611 = {
    CENTERED: 0x0,
    NOT_CENTERED: 0x1,
    FACE_CENTERED_TOO_FAR_TOP: 0x2,
    FACE_CENTERED_TOO_FAR_BOTTOM: 0x3,
    FACE_CENTERED_TOO_FAR_LEFT: 0x4,
    FACE_CENTERED_TOO_FAR_RIGHT: 0x5
  }
  var _0x52a03d = {
    FACE_LOOKING_STRAIGHT_AHEAD: 0x0,
    FACE_LOOKING_TOO_FAR_RIGHT: 0x1,
    FACE_LOOKING_TOO_FAR_LEFT: 0x2,
    YAW_CALCULATION_FAILURE: 0x3
  }
  var _0x22dccb = {
    FACE_LOOKING_STRAIGHT_AHEAD: 0x0,
    FACE_LOOKING_TOO_FAR_DOWN: 0x1,
    FACE_LOOKING_TOO_FAR_UP: 0x2,
    PITCH_CALCULATION_FAILURE: 0x3
  }
  var _0x5d0880 = { EVEN_LIGHTING: 0x0, UNEVEN_LIGHTING: 0x1 }
  var _0x1985b6 = { FACE_UPRIGHT: 0x0, FACE_ROTATED_TOO_FAR_RIGHT: 0x1, FACE_ROTATED_TOO_FAR_LEFT: 0x2 }
  var _0x519dfd = {
    FNKEY_FACE_NORMALIZED_WIDTH_FROM_TEMPLES: _0x2ab90b,
    FNKEY_NORMALIZED_RIGHT_TEMPLE_X: _0x991246,
    FNKEY_NORMALIZED_LEFT_TEMPLE_X: _0x981158,
    FNKEY_FACE_SIZECLASS_FROM_TEMPLE: _0x57b080,
    FNKEY_FACE_FTE_REASON: _0x219af0,
    FNKEY_FACE_FEEDBACK_WHEN_LOOKING_FOR_ZOOMED: _0x441e3a,
    FNKEY_FACE_FEEDBACK_WHEN_LOOKING_FOR_UNZOOMED: _0x2cc193,
    FNKEY_IMAGE_WIDTH_AT_FACE_DETECTION: _0x5f41ea,
    FNKEY_FACE_UPRIGHTNESS_: _0x503809,
    FNKEY_FACE_UPRIGHTNESS: _0xe42b77,
    FNKEY_FACE_ROTATION_ANGLE: _0x56465b,
    FNKEY_VECTOR_ANGLE_: _0x52cace,
    FNKEY_FACE_YAW_COMPUTED: _0x39753a,
    FNKEY_ZOOM_FILTER_CONSECUTIVE_FRAMES_COUNT: _0xf81284,
    ZOOM_FACE_CENTEREDNESS_CATEGORY: _0xfeb75b,
    ZOOM_DISTANCE_FROM_OPTIMAL_FRAME: _0xbd1168,
    FNKEY_computeEncodedFTEMeasurement: _0x307b3e,
    IMAGE_SWAP_MIN: _0x4a4c56,
    IMAGE_SWAP_MAX: _0x50dfb2,
    TOO_CLOSE_LEFT_RIGHT_CASCADE: _0x527cdd,
    TOO_CLOSE_LEFT_RIGHT_BORDER_PERCENTAGE: _0x4cfe67,
    FNKEY_IN_FRAME_IMAGE: _0x3ab53f,
    TOO_CLOSE_TOP_CASCADE_LOW_ASPECT: _0x2b4227,
    TOO_CLOSE_TOP_CASCADE: _0x239b12,
    TOO_CLOSE_TOPBOTTOM_BORDER_PERCENTAGE_LOW_ASPECT: _0x4283ce,
    TOO_CLOSE_TOPBOTTOM_BORDER_PERCENTAGE: _0x5db4b0,
    isLowAspectRatio: _0x32d742,
    PhFTEReason: _0x281129,
    ZoomFaceSizeCategory: _0x44dcfd,
    ZoomFaceCenterednessCategory: _0x4d5611,
    ZoomFaceYaw: _0x52a03d,
    ZoomFacePitch: _0x22dccb,
    ZoomLightingBalance: _0x5d0880,
    ZoomFaceUprightness: _0x1985b6
  }
  return _0x519dfd
})()
ZoomSDK['ZoomInternal']['PhWeb'] = (function() {
  if (typeof window === 'undefined') {
    return
  }
  var _0x1dd6d8 = 0x1
  var _0x4dfee1 = {}
  var _0x39150f
  var _0x50f551 = 0x0
  var _0x139ba0
  var _0x239d1f
  var _0x5b40a9
  var _0x477264
  var _0x422f5a
  function _0x19e248() {
    _0x477264 = new Worker(ZoomSDK['zoomResourceDirectory']() + '/3a4b797006cfdb1c6b9d47dc24c4ffbe38684c83')
    _0x477264['onmessage'] = function(_0x4e7f3e) {
      switch (_0x4e7f3e['data']['process']) {
        case 'init':
          break
        case 'preload':
          _0x477264['postMessage']({
            process: 'init',
            appToken: ZoomSDK['ZoomInternal']['ZAPI']['Constants']['CLIENT_APPTOKEN']
          })
          break
        case 'upload':
          break
        default:
          console['trace']()
          console['warn']('Should\x20never\x20get\x20here')
      }
    }
    _0x422f5a = new Worker(ZoomSDK['zoomResourceDirectory']() + '/3a4b797006cfdb1c6b9d47dc24c4ffbe38684c84')
    _0x422f5a['onmessage'] = function(_0x215536) {
      switch (_0x215536['data']['process']) {
        case 'preload':
          break
        case 'zipComplete':
          var _0x288362 = ZoomSDK['ZoomInternal']['currentApplicationSettings']()['SendDiagnosticsToFaceTec']
          if (_0x288362) {
            _0x477264['postMessage']({
              process: 'upload',
              userAgentString: ZoomSDK['createZoomAPIUserAgentString'](_0x39150f),
              zoomSessionData: JSON['stringify'](_0x5b40a9)
            })
          }
          ZoomSDK['ZoomInternal']['State']['setZoomCaptureComplete']()
          ZoomSDK['ZoomInternal']['State']['setZoomIsReadyForCapture']()
          ZoomSDK['ZoomInternal']['returnResults']({
            sessionData: _0x215536['data']['sessionData'],
            sessionId: _0x39150f,
            status: ZoomSDK['ZoomInternal']['State']['getLastZoomResult'](),
            faceMetrics: _0x239d1f
          })
          break
        default:
          console['trace']()
          console['warn']('Should\x20never\x20get\x20here')
      }
    }
  }
  function _0x283775() {
    if (_0x477264) {
      _0x477264['terminate']()
    }
    if (_0x422f5a) {
      _0x422f5a['terminate']()
    }
  }
  function _0x593c91(_0x1d7520, _0x3a35c6, _0x45eb4a, _0x14a41e, _0x3cb9c2, _0x3916f2, _0x2bfe66) {
    return (
      _0x1d7520 +
      _0x3a35c6 +
      ',' +
      _0x45eb4a +
      ',' +
      _0x14a41e +
      ',' +
      _0x3cb9c2 +
      ',' +
      _0x3916f2 +
      ',' +
      _0x2bfe66 +
      '/'
    )
  }
  function _0x14ef98(_0x273ccf, _0x2f5a78) {
    var _0x5ad4df = -0x1
    for (var _0x3cd1ae = 0x0; _0x3cd1ae < _0x273ccf['length']; _0x3cd1ae++) {
      if (_0x273ccf[_0x3cd1ae]['currentImageData']['frameIndex'] === _0x2f5a78) {
        _0x5ad4df = _0x3cd1ae
      }
    }
    return _0x5ad4df
  }
  var _0x37017c = function(_0x4c1038) {
    var _0x115cd7
    if (_0x4c1038) {
      var _0x22ac6f = atob(_0x4c1038['split'](',')[0x1])
      var _0x685a27 = new ArrayBuffer(_0x22ac6f['length'])
      var _0x143718 = new Uint8Array(_0x685a27)
      for (var _0x383bb = 0x0; _0x383bb < _0x22ac6f['length']; _0x383bb++) {
        _0x143718[_0x383bb] = _0x22ac6f['charCodeAt'](_0x383bb)
      }
      _0x115cd7 = new Blob([_0x685a27], { type: 'image/jpeg' })
    }
    _0x50f551 += _0x115cd7['size']
    return _0x115cd7
  }
  var _0x172fae = function(_0x3f190f) {
    var _0x21c85e
    if (_0x3f190f) {
      var _0x23a238 = _0x3f190f['split']('data:image/jpeg;base64,')
      if (_0x23a238['length'] === 0x1) {
        _0x23a238 = _0x3f190f['split']('data:image/png;base64,')
      }
      if (_0x23a238['length'] === 0x1) {
        _0x21c85e = _0x3f190f
      } else {
        _0x21c85e = _0x23a238[0x1]
      }
    }
    return _0x21c85e
  }
  function _0x8d458(_0x491af4) {
    _0x139ba0 = _0x491af4['zoomData']
    var _0x46fa3d = _0x491af4['sessionTemplateMetadata']
    var _0x5262b0 = _0x491af4['pageWidth']
    var _0x3885b2 = _0x491af4['currentCaptureData']
    var _0x2c9851 = _0x491af4['initTimes']
    var _0x59d7b5 = ZoomSDK['ZoomInternal']['currentApplicationSettings']()['SendDiagnosticsToFaceTec']
    var _0x1061b7 = ![]
    var _0x1cbb45
    var _0x1ca18d = []
    var _0x49caf4 = 0x1
    _0x239d1f = {}
    var _0x4925f6 = {}
    var _0x313d7b = { sessionPayload: {} }
    var _0x10d464 = 0x0
    var _0x2233cb = {}
    var _0x1865c1 = ''
    var _0x8d6890 = 0x0
    var _0x2253fd = { DetectRTC: JSON['parse'](JSON['stringify'](ZoomSDK['ZoomInternal']['ZoomInfo']['DetectRTC'])) }
    var _0x1e2411 = {
      ZoomWebTag: ZoomSDK['ZoomInternal']['ZoomNetworking']['getObfuscatedTagString'](
        ZoomSDK['ZoomInternal']['Constants']['ZOOM_SESSION_WEB']
      ),
      VerificationTag: ZoomSDK['ZoomInternal']['ZoomNetworking']['getObfuscatedTagString'](
        ZoomSDK['ZoomInternal']['Constants']['TYPE_VERIFICATION']
      ),
      TimeoutTag: ZoomSDK['ZoomInternal']['ZoomNetworking']['getObfuscatedTagString'](
        ZoomSDK['ZoomInternal']['Constants']['SESSION_RESULT_OVERALL_SESSION_FAILED_TIMEOUT']
      ),
      CancelTag: ZoomSDK['ZoomInternal']['ZoomNetworking']['getObfuscatedTagString'](
        ZoomSDK['ZoomInternal']['Constants']['SESSION_RESULT_OVERALL_ENROLLMENT_CANCEL']
      ),
      ContextSwitchTag: ZoomSDK['ZoomInternal']['ZoomNetworking']['getObfuscatedTagString'](
        ZoomSDK['ZoomInternal']['Constants']['SESSION_RESULT_OVERALL_CONTEXT_SWITCH']
      )
    }
    _0x39150f = _0x491af4['diagnosticId']
    _0x46fa3d['as'] = !![]
    _0x46fa3d['at'] = {}
    if (_0x59d7b5) {
      _0x4925f6['ot'] = [_0x1e2411['ZoomWebTag'], _0x1e2411['VerificationTag']]
      _0x4925f6['aa'] = ZoomSDK['ZoomInternal']['Constants']['DEVICE_ID']
      _0x4925f6['ab'] = ZoomSDK['ZoomInternal']['Constants']['DEVICE_MODEL']
      _0x4925f6['ac'] = ZoomSDK['ZoomInternal']['Constants']['ZOOM_VERSION']()
      _0x4925f6['ad'] = ZoomSDK['ZoomInternal']['ZAPI']['applicationData']['applicationId']
      _0x4925f6['lc'] = ZoomSDK['ZoomInternal']['ZAPI']['applicationData']['clientIp']
      _0x4925f6['ak'] = _0x39150f
      _0x4925f6['ag'] = ZoomSDK['ZoomInternal']['Constants']['CLIENT_PACKAGE']
      _0x4925f6['ah'] = ZoomSDK['ZoomInternal']['ZAPI']['Constants']['CLIENT_APPTOKEN']
      _0x4925f6['av'] = 0x0
      if (_0x139ba0['timedOut']) {
        _0x4925f6['ot']['push'](_0x1e2411['TimeoutTag'])
        _0x4925f6['av'] = 0x1
      }
      if (_0x139ba0['cancelled']) {
        _0x4925f6['ot']['push'](_0x1e2411['CancelTag'])
      }
      if (_0x139ba0['contextSwitch']) {
        _0x4925f6['ot']['push'](_0x1e2411['ContextSwitchTag'])
      }
    }
    _0x313d7b['ak'] = _0x39150f
    _0x313d7b['ad'] = ZoomSDK['ZoomInternal']['ZAPI']['applicationData']['applicationId']
    _0x313d7b['installationId'] = ZoomSDK['ZoomInternal']['Constants']['DEVICE_ID']
    if (_0x139ba0['consecutiveFrameState']['count'] >= _0x139ba0['consecutiveFrameState']['threshold']) {
      _0x313d7b['af'] = _0x139ba0['consecutiveFrameState']['count']
    } else {
      _0x313d7b['af'] = 0x0
    }
    _0x313d7b['av'] = 0x0
    if (_0x139ba0['timedOut']) {
      _0x313d7b['av'] = 0x1
    }
    _0x313d7b['ax'] = _0x1dd6d8
    var _0x5c7982 = []
    _0x139ba0['unzoomed']['frames']['forEach'](function(_0x1c695c) {
      if (
        !_0x1c695c['currentImageData']['feedbackData']['file']['FNKEY_FACE_FTE_REASON'] &&
        _0x1c695c['currentImageData']['feedbackData']['FNKEY_FACE_SIZECLASS_FROM_TEMPLE'] ===
          ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceSizeCategory']['UNZOOMED'] &&
        _0x1c695c['currentImageData']['image']
      ) {
        _0x5c7982['push'](_0x1c695c)
      }
    })
    if (_0x5c7982['length'] > 0x5) {
      _0x5c7982['pop']()
    }
    if (_0x5c7982['length'] > 0x5) {
      _0x5c7982['shift']()
    }
    var _0x56e8d3 = _0x5c7982['sort'](function() {
      return 0.5 - Math['random']()
    })
    _0x239d1f['auditTrail'] = _0x56e8d3['slice'](0x0, 0x5)
    _0x239d1f['auditTrail']['sort'](function(_0x506062, _0x5b85cc) {
      return _0x506062['currentImageData']['frameIndex'] - _0x5b85cc['currentImageData']['frameIndex']
    })
    _0x239d1f['auditTrail']['forEach'](function(_0x585243, _0x445985) {
      _0x239d1f['auditTrail'][_0x445985] = _0x585243['currentImageData']['image']
    })
    var _0x374602 = 0x3e8
    var _0x573c98 = -0x3e8
    if (_0x139ba0['between']['frames']['length'] > 0x0) {
      _0x139ba0['between']['frames']['forEach'](function(_0x2a421a, _0x256dc1) {
        if (!_0x2a421a['currentImageData']['image']) {
          _0x139ba0['between']['frames'][_0x256dc1]['currentImageData']['feedbackData']['file'][
            ZoomSDK['ZoomInternal']['Px']['Constants']['ZOOM_DISTANCE_FROM_OPTIMAL_FRAME']
          ] = 0x3e8
        } else {
          var _0x492086 =
            _0x2a421a['currentImageData']['feedbackData'][
              ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_NORMALIZED_WIDTH_FROM_TEMPLES']
            ]
          if (_0x492086 > _0x573c98) {
            _0x573c98 = _0x492086
          }
          if (_0x492086 < _0x374602) {
            _0x374602 = _0x492086
          }
        }
      })
      _0x139ba0['between']['frames']['sort'](function(_0x1431ee, _0x26fa35) {
        return (
          _0x1431ee['currentImageData']['feedbackData']['file'][
            ZoomSDK['ZoomInternal']['Px']['Constants']['ZOOM_DISTANCE_FROM_OPTIMAL_FRAME']
          ] -
          _0x26fa35['currentImageData']['feedbackData']['file'][
            ZoomSDK['ZoomInternal']['Px']['Constants']['ZOOM_DISTANCE_FROM_OPTIMAL_FRAME']
          ]
        )
      })
      var _0x4e6acd = _0x139ba0['between']['maximumFramesToSave']
      if (_0x139ba0['timedOut']) {
        _0x4e6acd = _0x139ba0['unzoomed']['maximumFramesToSave']
      }
      _0x139ba0['between']['frames']['forEach'](function(_0x5e0f73, _0x188eca) {
        if (_0x188eca >= _0x4e6acd) {
          delete _0x5e0f73['currentImageData']['image']
        }
        var _0x36bc65 = _0x14ef98(
          _0x139ba0['highResBetweenFrames']['frames'],
          _0x5e0f73['currentImageData']['frameIndex']
        )
        if (_0x36bc65 > -0x1) {
          _0x5e0f73['currentImageData']['highResImage'] =
            _0x139ba0['highResBetweenFrames']['frames'][_0x36bc65]['currentImageData']['highResImage']
          _0x139ba0['highResBetweenFrames']['frames']['splice'](_0x36bc65, 0x1)
        }
        _0x1ca18d['push'](_0x5e0f73)
      })
    }
    if (_0x59d7b5) {
      _0x139ba0['highResBetweenFrames']['frames']['forEach'](function(_0x2f661) {
        _0x1ca18d['push'](_0x2f661)
      })
    }
    if (_0x139ba0['unzoomed']['frames']['length'] > 0x0) {
      _0x139ba0['unzoomed']['frames']['forEach'](function(_0x2f879f, _0xdf6a69) {
        if (!_0x2f879f['currentImageData']['image']) {
          _0x139ba0['unzoomed']['frames'][_0xdf6a69]['currentImageData']['feedbackData']['file'][
            ZoomSDK['ZoomInternal']['Px']['Constants']['ZOOM_DISTANCE_FROM_OPTIMAL_FRAME']
          ] = 0x3e8
        }
      })
      _0x139ba0['unzoomed']['frames']['sort'](function(_0x33d530, _0x163bec) {
        return (
          _0x33d530['currentImageData']['feedbackData']['file'][
            ZoomSDK['ZoomInternal']['Px']['Constants']['ZOOM_DISTANCE_FROM_OPTIMAL_FRAME']
          ] -
          _0x163bec['currentImageData']['feedbackData']['file'][
            ZoomSDK['ZoomInternal']['Px']['Constants']['ZOOM_DISTANCE_FROM_OPTIMAL_FRAME']
          ]
        )
      })
      _0x139ba0['unzoomed']['frames']['forEach'](function(_0x589f7c, _0x57ec9e) {
        if (_0x57ec9e >= _0x139ba0['unzoomed']['maximumFramesToSave']) {
          delete _0x589f7c['currentImageData']['image']
        }
        var _0x1ba258 = _0x14ef98(
          _0x139ba0['highResUnzoomedFrames']['frames'],
          _0x589f7c['currentImageData']['frameIndex']
        )
        if (_0x1ba258 > -0x1) {
          _0x589f7c['currentImageData']['highResImage'] =
            _0x139ba0['highResUnzoomedFrames']['frames'][_0x1ba258]['currentImageData']['highResImage']
          _0x139ba0['highResUnzoomedFrames']['frames']['splice'](_0x1ba258, 0x1)
        }
        _0x1ca18d['push'](_0x589f7c)
      })
    }
    if (_0x59d7b5) {
      _0x139ba0['highResUnzoomedFrames']['frames']['forEach'](function(_0x482cb8) {
        _0x1ca18d['push'](_0x482cb8)
      })
      _0x139ba0['highResZoomedFrames']['frames']['forEach'](function(_0x18ca85) {
        _0x1ca18d['push'](_0x18ca85)
      })
    }
    _0x139ba0['random']['frames'] = _0x139ba0['random']['frames']['sort'](function() {
      return 0.5 - Math['random']()
    })
    _0x139ba0['random']['frames']['forEach'](function(_0x3454fc, _0x2c113d) {
      _0x139ba0['random']['frames'][_0x2c113d]['currentImageData']['image'] = null
    })
    _0x1ca18d = []['concat'](_0x1ca18d, _0x139ba0['zoomed']['frames'], _0x139ba0['random']['frames'])
    _0x1ca18d['sort'](function(_0x4da489, _0x1c4b21) {
      return _0x4da489['currentImageData']['frameIndex'] - _0x1c4b21['currentImageData']['frameIndex']
    })
    var _0x4c4c41 = 0x0
    var _0x707cd0 = 0x0
    _0x1ca18d['forEach'](function(_0x20055f) {
      if (
        !_0x20055f['currentImageData']['highResImage'] &&
        !_0x20055f['currentImageData']['image'] &&
        !_0x20055f['currentImageData']['thumbnail']
      ) {
        return
      }
      _0x2233cb[_0x49caf4] = {}
      if (_0x20055f['currentImageData']['image']) {
        _0x1061b7 = !![]
        _0x10d464 += 0x1
        _0x313d7b['sessionPayload'][_0x49caf4] = {}
        var _0x32588f = _0x37017c(_0x20055f['currentImageData']['image'])
        _0x707cd0 += 0x1
        _0x4c4c41 += _0x32588f['size']
        _0x313d7b['sessionPayload'][_0x49caf4]['ai_' + _0x20055f['currentImageData']['frameIndex']] = _0x32588f
        if (_0x59d7b5) {
          _0x2233cb[_0x49caf4]['ai_' + _0x20055f['currentImageData']['frameIndex']] = _0x172fae(
            _0x20055f['currentImageData']['image']
          )
        }
      }
      if (!_0x59d7b5) {
        _0x49caf4 += 0x1
        return
      }
      if (_0x20055f['currentImageData']['thumbnail']) {
        _0x2233cb[_0x49caf4]['aj_' + _0x20055f['currentImageData']['frameIndex']] = _0x172fae(
          _0x20055f['currentImageData']['thumbnail']
        )
      }
      if (_0x20055f['currentImageData']['highResImage']) {
        _0x2233cb[_0x49caf4]['ak_' + _0x20055f['currentImageData']['frameIndex']] = _0x172fae(
          _0x20055f['currentImageData']['highResImage']
        )
      }
      var _0x2cc0c8
      if (_0x20055f['currentImageData']['zoomPhase'] == 0x0) {
        _0x2cc0c8 =
          _0x20055f['currentImageData']['feedbackData']['file']['fnkey_FACE_FEEDBACK_WHEN_LOOKING_FOR_UNZOOMED']
      } else {
        _0x2cc0c8 = _0x20055f['currentImageData']['feedbackData']['file']['fnkey_FACE_FEEDBACK_WHEN_LOOKING_FOR_ZOOMED']
      }
      var _0x51242b = {}
      _0x51242b['at'] = {}
      _0x51242b['at']['cr'] = _0x20055f['currentImageData']['feedbackData']['points']
      _0x51242b['at']['ar'] = _0x2cc0c8
      _0x51242b['at']['a0'] = _0x20055f['currentImageData']['feedbackData']['FNKEY_FACE_NORMALIZED_WIDTH_FROM_TEMPLES']
      _0x51242b['at']['a00'] = _0x20055f['currentImageData']['feedbackData']['fnkey_NORMALIZED_RIGHT_TEMPLE_X']
      _0x51242b['at']['a01'] = _0x20055f['currentImageData']['feedbackData']['fnkey_NORMALIZED_LEFT_TEMPLE_X']
      _0x51242b['at']['a03'] =
        _0x20055f['currentImageData']['feedbackData']['file'][
          ZoomSDK['ZoomInternal']['Px']['Constants']['ZOOM_DISTANCE_FROM_OPTIMAL_FRAME']
        ]
      _0x51242b['at']['a1'] = _0x20055f['currentImageData']['feedbackData']['FNKEY_FACE_SIZECLASS_FROM_TEMPLE']
      _0x51242b['at']['a2'] = _0x20055f['currentImageData']['feedbackData']['file']['FNKEY_FACE_ROTATION_ANGLE']
      _0x51242b['at']['a3'] =
        _0x20055f['currentImageData']['feedbackData']['file'][
          ZoomSDK['ZoomInternal']['Px']['Constants']['ZOOM_FACE_CENTEREDNESS_CATEGORY']
        ]
      _0x51242b['at']['a4'] = _0x20055f['currentImageData']['feedbackData']['file']['fnkey_FACE_YAW_COMPUTED']
      _0x51242b['at']['a5'] = _0x20055f['currentImageData']['feedbackData']['points'][0x0]
      _0x51242b['at']['a6'] = _0x20055f['currentImageData']['feedbackData']['points'][0x10]
      _0x51242b['at']['r'] = _0x20055f['currentImageData']['rect']
      _0x51242b['at']['b'] = _0x20055f['currentImageData']['feedbackData']['brightnessValue']
      if (!_0x1cbb45 && _0x20055f['currentImageData']['feedbackData']['brightnessValue']) {
        _0x1cbb45 = _0x20055f['currentImageData']['feedbackData']['brightnessValue']
      }
      _0x51242b['au'] = -0x1
      _0x51242b['al'] = _0x20055f['currentImageData']['faceFeedbackTime']
      _0x51242b['am'] = _0x20055f['currentImageData']['elapsedFeedbackTime']
      _0x51242b['an'] = _0x20055f['currentImageData']['feedbackData']['file']['FNKEY_FACE_FTE_REASON']
      _0x51242b['ao'] = _0x20055f['currentImageData']['zoomPhase']
      _0x51242b['ap'] = _0x20055f['currentImageData']['feedbackData']['file']['fnkey_FACE_YAW_COMPUTED']
      _0x51242b['aq'] = _0x20055f['currentImageData']['frameIndex']
      _0x51242b[ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_NORMALIZED_WIDTH_FROM_TEMPLES']] =
        _0x20055f['currentImageData']['feedbackData'][
          ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_NORMALIZED_WIDTH_FROM_TEMPLES']
        ]
      _0x51242b[ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_ROTATION_ANGLE']] =
        _0x20055f['currentImageData']['feedbackData']['file'][
          ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_ROTATION_ANGLE']
        ]
      _0x51242b[ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_VECTOR_ANGLE_']] =
        _0x20055f['currentImageData']['feedbackData']['file'][
          ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_VECTOR_ANGLE_']
        ]
      if (
        _0x20055f['currentImageData']['feedbackData']['file'][
          ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_computeEncodedFTEMeasurement']
        ] &&
        typeof _0x20055f['currentImageData']['feedbackData']['file'][
          ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_computeEncodedFTEMeasurement']
        ] !== 'undefined'
      ) {
        _0x51242b['nte'] =
          _0x20055f['currentImageData']['feedbackData']['file'][
            ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_computeEncodedFTEMeasurement']
          ]
      }
      if (_0x20055f['currentImageData']['feedbackData']['file']['fnkey_FACE_FTE_REASON']) {
        _0x51242b['au'] = _0x20055f['currentImageData']['feedbackData']['file']['fnkey_FACE_FTE_REASON']
      }
      if (_0x20055f['currentImageData']['atic']) {
        _0x51242b['atic'] = auditTrailImageCount
        auditTrailImageCount++
      }
      if (_0x20055f['currentImageData']['image'] || _0x20055f['currentImageData']['thumbnail']) {
        _0x1865c1 = _0x593c91(
          _0x1865c1,
          _0x20055f['currentImageData']['zoomPhase'],
          _0x20055f['currentImageData']['frameIndex'],
          _0x20055f['currentImageData']['elapsedFeedbackTime'],
          _0x2cc0c8,
          _0x20055f['currentImageData']['feedbackData']['file'][
            ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_FTE_REASON']
          ],
          _0x20055f['currentImageData']['feedbackData']['file'][
            ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_computeEncodedFTEMeasurement']
          ]
        )
      }
      _0x2233cb[_0x49caf4]['m'] = _0x51242b
      if (
        _0x20055f['currentImageData']['feedbackData'][
          ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_IN_FRAME_IMAGE']
        ] === ![]
      ) {
        _0x8d6890 = 0x1
      }
      _0x49caf4 += 0x1
    })
    if (!_0x1061b7) {
      ZoomSDK['ZoomInternal']['ZoomSessionProcessing']()
      ZoomSDK['ZoomInternal']['State']['setZoomCaptureComplete']()
      ZoomSDK['ZoomInternal']['State']['setZoomIsReadyForCapture']()
      ZoomSDK['ZoomInternal']['returnResults']({
        sessionData: null,
        sessionId: null,
        status: ZoomSDK['ZoomInternal']['State']['getLastZoomResult'](),
        faceMetrics: null
      })
      return
    }
    _0x8d6890 = 0x0
    _0x313d7b['aw'] = _0x8d6890
    _0x5b40a9 = _0x4925f6
    var _0x37617e = { ct: _0x139ba0['between']['frames']['length'] }
    if (_0x37617e['ct'] > 0x0) {
      _0x37617e['max'] = _0x573c98
      _0x37617e['min'] = _0x374602
    }
    if (_0x59d7b5) {
      _0x46fa3d['au'] = _0x1865c1
      _0x46fa3d['at']['zwrs'] = _0x2253fd['DetectRTC']['displayResolution']
      _0x46fa3d['at']['zwmb'] = _0x2253fd['DetectRTC']['isMobileDevice']
      _0x46fa3d['at']['zwbn'] = _0x2253fd['DetectRTC']['browser']['name']
      _0x46fa3d['at']['zwbv'] = _0x2253fd['DetectRTC']['browser']['fullVersion']
      _0x46fa3d['at']['zwss'] = screen['width'] + '/' + _0x5262b0
      _0x46fa3d['at']['zwhr'] = window['location']['href']
      _0x46fa3d['at']['zwaf'] = _0x139ba0['consecutiveFrameState']['count']
      _0x46fa3d['at']['zwax'] = _0x1dd6d8
      _0x46fa3d['at']['zwaw'] = _0x8d6890
      _0x46fa3d['at']['zway'] = _0x139ba0['darknessModeActivated']
      _0x46fa3d['at']['zwbf'] = _0x37617e
      if (_0x46fa3d['cameraConstraints']) {
        _0x46fa3d['at']['zwcc'] = _0x46fa3d['cameraConstraints']
      }
      try {
        _0x3885b2['ais'] = Math['round'](_0x4c4c41 / _0x707cd0)
      } catch (_0x562e83) {}
      _0x46fa3d['at']['c'] = _0x3885b2
      _0x46fa3d['at']['b'] = _0x1cbb45
      _0x46fa3d['at']['i'] = _0x2c9851
      _0x2233cb['0'] = {}
      _0x2233cb['0']['m'] = _0x46fa3d
      _0x5b40a9['sessionPayload'] = JSON['stringify'](_0x2233cb)
    }
    if (!_0x139ba0['cancelled']) {
      ZoomSDK['ZoomInternal']['State']['setLastZoomResult'](
        ZoomSDK['ZoomTypes']['ZoomCaptureResult']['SessionCompleted']
      )
    }
    ZoomSDK['ZoomInternal']['ZoomSessionProcessing']()
    _0x422f5a['postMessage']({ process: 'createSessionDataZip', zoomSessionDataForZip: _0x313d7b })
  }
  return {
    loadResources: function() {
      _0x19e248()
    },
    unloadResources: function() {
      _0x283775()
    },
    buildSessionData: function(_0x42c03c) {
      _0x8d458({
        zoomData: _0x42c03c['zoomData'],
        diagnosticId: ZoomSDK['ZoomInternal']['Zoom']['sessionDiagnosticId'](),
        sessionTemplateMetadata: JSON['parse'](JSON['stringify'](_0x4dfee1)),
        collectAuditTrail:
          ZoomSDK['ZoomTypes']['auditTrailType'] !== ZoomSDK['ZoomTypes']['ZoomAuditTrailType']['None'],
        pageWidth:
          window['innerWidth'] != null
            ? window['innerWidth']
            : document['body'] != null
            ? document['documentElement']['clientWidth']
            : null,
        currentCaptureData: ZoomSDK['ZoomInternal']['FPA']['getCurrentSettings'](),
        initTimes: ZoomSDK['ZoomInternal']['zoomInitTimes']()
      })
    },
    additionalMetaData: function(_0x32dc5e) {
      _0x4dfee1 = Object['assign']({}, _0x4dfee1, _0x32dc5e)
    }
  }
})()
ZoomSDK['ZoomInternal']['ZoomInterfaceImages'] = (function() {
  if (typeof window === 'undefined') {
    return
  }
  var _0x3c5029 =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAABkCAMAAACYXt08AAAC91BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Y3nl4AAAA/HRSTlMAAAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzU2Nzg5Ojs8PT5AQUJDREVGR0hJSktMTU5PUFFSU1RVVldY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'
  var _0x5150c8 =
    'data:image/png;base64,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'
  var _0x1c9f5b = new Image()
  var _0x22b017 = new Image()
  _0x1c9f5b['src'] = _0x3c5029
  _0x22b017['src'] = _0x5150c8
  return { zoomLogoElement: _0x1c9f5b, cancelButtonImageElement: _0x22b017 }
})()
ZoomSDK['ZoomInternal']['ZoomNetworking'] = (function() {
  function _0x265610() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'['replace'](/[xy]/g, function(_0x2e2c73) {
      var _0xf9319f = (Math['random']() * 0x10) | 0x0,
        _0xef97b9 = _0x2e2c73 == 'x' ? _0xf9319f : (_0xf9319f & 0x3) | 0x8
      return _0xef97b9['toString'](0x10)
    })
  }
  function _0x565066(_0x44b3d9, _0x17ae4a, _0x368067) {
    if (_0x17ae4a > _0x44b3d9['length'] - 0x1) return _0x44b3d9
    return _0x44b3d9['substr'](0x0, _0x17ae4a) + _0x368067 + _0x44b3d9['substr'](_0x17ae4a + 0x1)
  }
  function _0x2ef6c9(_0x345920) {
    var _0x1c5f2b = _0x345920
    var _0x3bc29d = Math['floor'](Math['random']() * 0x7) + 0x2
    var _0x2f73f5 = _0x265610()
      ['replace'](/-/g, '')
      ['toLowerCase']()
    var _0x2ce70d = _0x2f73f5
    _0x2ce70d = _0x565066(_0x2ce70d, 0x1, _0x3bc29d)
    var _0x51f9a9 = _0x2ce70d['length'] - 0x1 - _0x3bc29d
    _0x2ce70d = _0x565066(_0x2ce70d, _0x3bc29d, _0x1c5f2b[0x0])
    _0x2ce70d = _0x565066(_0x2ce70d, _0x51f9a9, _0x1c5f2b[0x1])
    var _0x25c0f7 = _0x2ce70d
    return _0x25c0f7
  }
  return {
    getObfuscatedZoomEventString: function(_0x5c87d7) {
      return getObfuscatedZoomEventString(_0x5c87d7)
    },
    getObfuscatedTagString: function(_0x1edcd6) {
      return _0x2ef6c9(_0x1edcd6)
    },
    uuid: function() {
      return _0x265610()
    }
  }
})()
ZoomSDK['ZoomInternal']['Zoom'] = (function() {
  var _0x3dce73 = { WAITING_FOR_UNZOOMED_FRAME: 0x0, HAVE_FIRST_UNZOOMED_FRAME: 0x1, HAVE_FACE_NOT_FOUND: 0x2 }
  var _0xa8bf39 = 0xa
  var _0x777a8d = 0x32
  var _0x74fa02 = 0x5
  var _0x127bfc = 0x5
  var _0x2169f6 = 0x5
  var _0x7b17d0 = 0x32
  var _0x5767dd = 0x2
  var _0x4165cd = 0xa
  var _0x28392f = 0x1
  var _0x513fdd = 0x3e8 * 0x2
  var _0x118ec7 = 0x0
  var _0x5d9467 = ![]
  var _0x5aacc7 = !![]
  var _0x3de066 = ![]
  var _0x4582aa = 0x3
  var _0x471fcc = ![]
  var _0x3a14fe = ![]
  var _0x44c745 = {}
  var _0x3be990 = -0x1
  function _0x5660de(_0x164238) {
    if (_0x4582aa <= 0x3) {
      _0x4582aa += 0x1
      return
    } else {
      _0x4582aa = 0x0
    }
    if (_0x5aacc7 || _0x3de066) {
      return
    }
    if (!_0x471fcc) {
      if (_0x164238 !== ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['FACE_NOT_FOUND']) {
        _0x471fcc = !![]
      }
      if (_0x471fcc && !_0x3a14fe) {
        _0x3a14fe = !![]
        ZoomSDK['ZoomInternal']['ZoomLockout']['addFailure']()
      }
    }
    if (_0x164238 === _0x3be990) {
      return
    }
    _0x3be990 = _0x164238
    var _0x3c624a
    if (
      _0x118ec7 !== 0x0 &&
      _0x164238 == ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['MOVE_FACE_CLOSER'] &&
      Date['now']() - _0x513fdd > _0x118ec7
    ) {
      _0x3c624a = ZoomSDK['ZoomInternal']['Px']['getFriendlyStringForFeedbackSignal'](
        ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['MOVE_FACE_EVEN_CLOSER']
      )
    } else {
      _0x3c624a = ZoomSDK['ZoomInternal']['Px']['getFriendlyStringForFeedbackSignal'](_0x164238)
    }
    document['getElementById'](ZoomSDK['ZoomInternal']['ZoomInterface']['zoomDomElements']['feedback'])[
      'innerHTML'
    ] = _0x3c624a
    if (_0x164238 === ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['HOLD_STEADY']) {
      ZoomSDK['ZoomInternal']['ZoomInterface']['Oval']['handleOvalSpinnerOnHoldSteadyFeedback'](_0x164238)
    }
  }
  function _0x2c6418(_0x225bd3, _0x553dbc) {
    return (
      _0x553dbc['currentImageData']['feedbackData']['file'][
        ZoomSDK['ZoomInternal']['Px']['Constants']['ZOOM_DISTANCE_FROM_OPTIMAL_FRAME']
      ] -
      _0x225bd3['currentImageData']['feedbackData']['file'][
        ZoomSDK['ZoomInternal']['Px']['Constants']['ZOOM_DISTANCE_FROM_OPTIMAL_FRAME']
      ]
    )
  }
  function _0x5d23fa(_0x69387e, _0x4d2ef4) {
    if (
      _0x4d2ef4['feedbackData'][ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_SIZECLASS_FROM_TEMPLE']] ===
      ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceSizeCategory']['BETWEEN_UNZOOMED_AND_ZOOMED']
    ) {
      if (_0x69387e['capturedFrames'] >= _0x69387e['maximumFramesToCapture']) {
        _0x44c745['between']['frames']['sort'](function(_0x5bff04, _0x27f595) {
          _0x2c6418(_0x5bff04, _0x27f595)
        })
        if (
          _0x4d2ef4['feedbackData']['file'][
            ZoomSDK['ZoomInternal']['Px']['Constants']['ZOOM_DISTANCE_FROM_OPTIMAL_FRAME']
          ] <
          _0x44c745['between']['frames'][0x0]['currentImageData']['feedbackData']['file'][
            ZoomSDK['ZoomInternal']['Px']['Constants']['ZOOM_DISTANCE_FROM_OPTIMAL_FRAME']
          ]
        ) {
          _0x44c745['between']['frames']['unshift']()
          _0x69387e['capturedFrames'] -= 0x1
        }
      }
    }
    if (_0x69387e['capturedFrames'] < _0x69387e['maximumFramesToCapture']) {
      if (_0x4d2ef4['image']) {
        _0x69387e['capturedFrames'] += 0x1
      }
      _0x69387e['frames']['push']({ currentImageData: _0x4d2ef4 })
    } else {
      delete _0x4d2ef4['image']
      _0x44c745['random']['frames']['push']({ currentImageData: _0x4d2ef4 })
    }
  }
  function _0x1e457c(_0x5543b5) {
    var _0x3fcd48 = ![]
    var _0x2548e2 = {}
    _0x2548e2['frameIndex'] = _0x5543b5['frameIndex']
    _0x2548e2['faceFeedbackTime'] = _0x5543b5['feedbackTime']['imageFeedbackTime']
    _0x2548e2['elapsedFeedbackTime'] = _0x5543b5['feedbackTime']['elapsedFeedbackTime']
    _0x2548e2['feedbackData'] = _0x5543b5['faceResult']
    _0x2548e2['thumbnail'] = _0x5543b5['thumbnail']
    _0x2548e2['image'] = _0x5543b5['image']
    _0x2548e2['rect'] = _0x5543b5['faceResult']['rect']
    if (
      _0x44c745['consecutiveFrameState']['state'] === _0x3dce73['HAVE_FIRST_UNZOOMED_FRAME'] &&
      typeof _0x2548e2['feedbackData']['file'][ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_FTE_REASON']] !==
        'undefined' &&
      _0x2548e2['feedbackData']['file'][ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_FTE_REASON']] ===
        ZoomSDK['ZoomInternal']['Px']['Constants']['PhFTEReason']['FACE_NOT_FOUND']
    ) {
      _0x44c745['consecutiveFrameState']['state'] = _0x3dce73['HAVE_FACE_NOT_FOUND']
      _0x44c745['consecutiveFrameState']['lastFrameWasConsecutiveFrame'] = !![]
    }
    if (
      typeof _0x2548e2['feedbackData']['file'][ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_FTE_REASON']] !==
        'undefined' &&
      _0x2548e2['feedbackData']['file'][ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_FTE_REASON']] !==
        ZoomSDK['ZoomInternal']['Px']['Constants']['PhFTEReason']['FACE_NOT_FOUND'] &&
      _0x44c745['consecutiveFrameState']['count'] < _0x44c745['consecutiveFrameState']['threshold']
    ) {
      _0x44c745['consecutiveFrameState']['count'] = 0x0
    }
    if (ZoomSDK['ZoomInternal']['State']['zoomPhase'] === ZoomSDK['ZoomInternal']['ZoomPhases']['ShouldShowUnzoomed']) {
      _0x2548e2['zoomPhase'] = 0x0
      if (
        _0x2548e2['feedbackData'][ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_SIZECLASS_FROM_TEMPLE']] ===
          ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceSizeCategory']['UNZOOMED'] &&
        !_0x2548e2['feedbackData']['file']['fte'] &&
        _0x2548e2['image'] != null
      ) {
        _0x5d23fa(_0x44c745['unzoomed'], _0x2548e2)
        _0x3fcd48 = !![]
        if (_0x44c745['consecutiveFrameState']['state'] === _0x3dce73['WAITING_FOR_UNZOOMED_FRAME']) {
          _0x44c745['consecutiveFrameState']['state'] = _0x3dce73['HAVE_FIRST_UNZOOMED_FRAME']
        }
        if (_0x44c745['unzoomed']['capturedFrames'] === _0x44c745['unzoomed']['maximumFramesToSave']) {
          ZoomSDK['ZoomInternal']['State']['zoomPhase'] = ZoomSDK['ZoomInternal']['ZoomPhases']['LookingForFirstZoomed']
        }
      } else {
        if (_0x44c745['random']['capturedFrames'] < _0x44c745['random']['maximumFramesToCapture'] * 0.6) {
          _0x5d23fa(_0x44c745['random'], _0x2548e2)
          _0x3fcd48 = !![]
        }
      }
    } else {
      _0x2548e2['zoomPhase'] = 0x1
      if (_0x118ec7 == 0x0) {
        _0x118ec7 = Date['now']()
      }
      if (
        _0x44c745['consecutiveFrameState']['state'] !== _0x3dce73['WAITING_FOR_UNZOOMED_FRAME'] &&
        typeof _0x2548e2['feedbackData']['file'][
          ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_FTE_REASON']
        ] !== 'undefined' &&
        _0x2548e2['feedbackData']['file'][ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_FTE_REASON']] ===
          ZoomSDK['ZoomInternal']['Px']['Constants']['PhFTEReason']['FACE_NOT_FOUND']
      ) {
        _0x5d23fa(_0x44c745['zoomed'], _0x2548e2)
        _0x3fcd48 = !![]
        if (
          _0x44c745['consecutiveFrameState']['lastFrameWasConsecutiveFrame'] == !![] ||
          _0x44c745['consecutiveFrameState']['count'] === 0x0
        ) {
          _0x44c745['consecutiveFrameState']['count'] += 0x1
        }
        _0x44c745['consecutiveFrameState']['state'] = _0x3dce73['HAVE_FACE_NOT_FOUND']
        _0x44c745['consecutiveFrameState']['lastFrameWasConsecutiveFrame'] = !![]
      } else {
        _0x44c745['consecutiveFrameState']['lastFrameWasConsecutiveFrame'] = ![]
        if (
          _0x2548e2['feedbackData'][ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_SIZECLASS_FROM_TEMPLE']] ===
            ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceSizeCategory']['BETWEEN_UNZOOMED_AND_ZOOMED'] &&
          _0x2548e2['image'] != null
        ) {
          _0x5d23fa(_0x44c745['between'], _0x2548e2)
          _0x3fcd48 = !![]
        } else if (
          _0x2548e2['feedbackData'][ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_SIZECLASS_FROM_TEMPLE']] ===
            ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceSizeCategory']['ZOOMED'] &&
          !_0x2548e2['feedbackData']['file']['fte']
        ) {
          ZoomSDK['ZoomInternal']['State']['zoomPhase'] = ZoomSDK['ZoomInternal']['ZoomPhases']['ShouldShowZoomed']
          if (_0x2548e2['image'] != null) {
            _0x5d23fa(_0x44c745['zoomed'], _0x2548e2)
            _0x3fcd48 = !![]
          }
        } else if (
          _0x2548e2['feedbackData'][ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_SIZECLASS_FROM_TEMPLE']] ===
            ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceSizeCategory']['UNZOOMED'] &&
          _0x44c745['zoomed']['length'] > 0x0
        ) {
          delete _0x2548e2['image']
        } else if (
          _0x2548e2['feedbackData'][ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_SIZECLASS_FROM_TEMPLE']] ===
            ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceSizeCategory']['UNZOOMED'] &&
          !_0x2548e2['feedbackData']['file']['fte'] &&
          _0x2548e2['image'] != null
        ) {
          _0x5d23fa(_0x44c745['unzoomed'], _0x2548e2)
          _0x3fcd48 = !![]
        } else {
          _0x5d23fa(_0x44c745['random'], _0x2548e2)
          _0x3fcd48 = !![]
        }
      }
      if (!_0x3fcd48) {
        if (
          _0x44c745['random']['capturedFrames'] > _0x44c745['random']['maximumFramesToCapture'] ||
          ZoomSDK['ZoomInternal']['State']['zoomPhase'] === ZoomSDK['ZoomInternal']['ZoomPhases']['ShouldShowUnzoomed']
        ) {
          delete _0x2548e2['image']
        }
        _0x5d23fa(_0x44c745['random'], _0x2548e2)
      }
    }
    if (
      ZoomSDK['ZoomInternal']['State']['getIsCapturingZoom']() &&
      !ZoomSDK['ZoomInternal']['ZoomInterface']['Oval']['hasAnimatedOval'] &&
      _0x44c745['unzoomed']['capturedFrames'] >= _0x44c745['unzoomed']['maximumFramesToSave']
    ) {
      ZoomSDK['ZoomInternal']['ZoomInterface']['Oval']['expandOval']()
    }
    var _0x430891 =
      ZoomSDK['ZoomInternal']['State']['isTimedOut']() &&
      ZoomSDK['ZoomInternal']['State']['captureState']() ===
        ZoomSDK['ZoomInternal']['State']['ZoomCaptureStates']['CapturingZoom']
    var _0x603a84 =
      ZoomSDK['ZoomInternal']['State']['getIsCapturingZoom']() &&
      _0x44c745['unzoomed']['capturedFrames'] >= _0x44c745['unzoomed']['maximumFramesToSave'] &&
      _0x44c745['zoomed']['capturedFrames'] >= _0x44c745['zoomed']['maximumFramesToSave']
    if (_0x430891 || _0x603a84) {
      ZoomSDK['ZoomInternal']['FPA']['stop']()
      ZoomSDK['ZoomInternal']['State']['setZoomCaptureComplete']()
      if (_0x430891) {
        _0x44c745['timedOut'] = !![]
        ZoomSDK['ZoomInternal']['State']['setLastZoomResult'](
          ZoomSDK['ZoomTypes']['ZoomCaptureResult']['SessionCompleted']
        )
        ZoomSDK['ZoomInternal']['setSessionResultStatus'](ZoomSDK['ZoomTypes']['SessionTimedOut'])
      } else {
        ZoomSDK['ZoomInternal']['setSessionResultStatus'](ZoomSDK['ZoomTypes']['ZoomSessionCompleted'])
      }
      ZoomSDK['ZoomInternal']['ZoomInterface']['transitionFromZoom'](_0x430891, function() {
        if (_0x471fcc) {
          ZoomSDK['ZoomInternal']['PhWeb']['buildSessionData']({ zoomData: _0x44c745 })
        } else {
          ZoomSDK['ZoomInternal']['ZoomSessionProcessing']()
          ZoomSDK['ZoomInternal']['returnResults']({
            sessionData: null,
            sessionId: null,
            status: ZoomSDK['ZoomInternal']['State']['getLastZoomResult'](),
            faceMetrics: null
          })
        }
        if (!_0x44c745['timedOut']) {
          if (_0x3a14fe) {
            ZoomSDK['ZoomInternal']['ZoomLockout']['removeLastFailure']()
          }
          _0x3a14fe = ![]
          _0x471fcc = ![]
        }
        _0x5aacc7 = !![]
        ZoomSDK['ZoomInternal']['State']['setZoomIsReadyForCapture']()
      })
    }
  }
  function _0x30ae86(_0x54a74d) {
    _0x44c745['elapsedTime'] += _0x54a74d['feedbackTime']
    _0x54a74d['feedbackTime'] = {
      imageFeedbackTime: _0x54a74d['feedbackTime'],
      elapsedFeedbackTime: _0x44c745['elapsedTime']
    }
    if (ZoomSDK['ZoomInternal']['State']['getIsCapturingZoom']()) {
      if (
        ZoomSDK['ZoomInternal']['State']['zoomPhase'] === ZoomSDK['ZoomInternal']['ZoomPhases']['ShouldShowUnzoomed']
      ) {
        _0x5660de(_0x54a74d['faceResult']['file']['fnkey_FACE_FEEDBACK_WHEN_LOOKING_FOR_UNZOOMED'])
      } else {
        if (
          !_0x5d9467 &&
          ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['HOLD_STEADY'] ==
            _0x54a74d['faceResult']['file']['fnkey_FACE_FEEDBACK_WHEN_LOOKING_FOR_ZOOMED']
        ) {
          _0x5d9467 = !![]
        }
        _0x5660de(_0x54a74d['faceResult']['file']['fnkey_FACE_FEEDBACK_WHEN_LOOKING_FOR_ZOOMED'])
      }
      _0x1e457c(_0x54a74d)
    }
  }
  function _0x397fdc() {
    _0x44c745 = {}
    _0x5d9467 = ![]
    _0x471fcc = ![]
    _0x3a14fe = ![]
    _0x44c745['diagnosticId'] = ZoomSDK['ZoomInternal']['ZoomNetworking']['uuid']()
    _0x44c745['highResUnzoomedFrames'] = {}
    _0x44c745['highResUnzoomedFrames']['maximumFramesToCapture'] = _0x28392f
    _0x44c745['highResUnzoomedFrames']['frames'] = []
    _0x44c745['highResUnzoomedFrames']['capturedFrames'] = 0x0
    _0x44c745['highResBetweenFrames'] = {}
    _0x44c745['highResBetweenFrames']['maximumFramesToCapture'] = _0x28392f
    _0x44c745['highResBetweenFrames']['frames'] = []
    _0x44c745['highResBetweenFrames']['capturedFrames'] = 0x0
    _0x44c745['highResZoomedFrames'] = {}
    _0x44c745['highResZoomedFrames']['maximumFramesToCapture'] = _0x28392f
    _0x44c745['highResZoomedFrames']['frames'] = []
    _0x44c745['highResZoomedFrames']['capturedFrames'] = 0x0
    _0x44c745['unzoomed'] = {}
    _0x44c745['unzoomed']['maximumFramesToCapture'] = _0x777a8d
    _0x44c745['unzoomed']['maximumFramesToSave'] = _0x74fa02
    _0x44c745['unzoomed']['frames'] = []
    _0x44c745['unzoomed']['capturedFrames'] = 0x0
    _0x44c745['between'] = {}
    _0x44c745['between']['maximumFramesToCapture'] = _0x7b17d0
    _0x44c745['between']['maximumFramesToSave'] = _0x5767dd
    _0x44c745['between']['frames'] = []
    _0x44c745['between']['capturedFrames'] = 0x0
    _0x44c745['zoomed'] = {}
    _0x44c745['zoomed']['maximumFramesToCapture'] = _0x127bfc
    _0x44c745['zoomed']['maximumFramesToSave'] = _0x2169f6
    _0x44c745['zoomed']['frames'] = []
    _0x44c745['zoomed']['capturedFrames'] = 0x0
    _0x44c745['random'] = {}
    _0x44c745['random']['maximumFramesToCapture'] = _0x4165cd
    _0x44c745['random']['frames'] = []
    _0x44c745['random']['capturedFrames'] = 0x0
    _0x44c745['elapsedTime'] = 0x0
    _0x44c745['darknessModeActivated'] = 0x0
    ZoomSDK['ZoomInternal']['State']['zoomPhase'] = ZoomSDK['ZoomInternal']['ZoomPhases']['ShouldShowUnzoomed']
    _0x44c745['consecutiveFrameState'] = {
      state: _0x3dce73['WAITING_FOR_UNZOOMED_FRAME'],
      count: 0x0,
      threshold: _0xa8bf39,
      lastFrameWasConsecutiveFrame: ![]
    }
    _0x5aacc7 = !![]
    _0x118ec7 = 0x0
    _0x3de066 = ![]
    var _0x432b9f = 0x190
    ZoomSDK['ZoomInternal']['ZoomInterface']['turnOnZoomFeedbackContainer'](_0x432b9f)
    ZoomSDK['ZoomInternal']['FPA']['start']()
    _0x5aacc7 = ![]
    ZoomSDK['ZoomInternal']['State']['setIsCapturingZoom']()
  }
  function _0x17f397(_0x27498d) {
    if (!ZoomSDK) {
      console['log'](
        'ZoOm\x20Error\x2022002:\x20ZoomSession.cancel()\x20was\x20called\x20but\x20ZoomSDK\x20does\x20not\x20exist\x20anymore.'
      )
      return
    }
    _0x3de066 = !![]
    ZoomSDK['ZoomInternal']['State']['setLastZoomResult'](ZoomSDK['ZoomTypes']['ZoomCaptureResult']['UserCancelled'])
    if (_0x27498d) {
      if (_0x27498d == 'context') {
        ZoomSDK['ZoomInternal']['State']['setLastZoomResult'](
          ZoomSDK['ZoomTypes']['ZoomCaptureResult']['FailedDueToOSContextSwitch']
        )
        _0x44c745['contextSwitch'] = !![]
      } else if (_0x27498d == 'orientation') {
        ZoomSDK['ZoomInternal']['State']['setLastZoomResult'](
          ZoomSDK['ZoomTypes']['ZoomCaptureResult']['FailedDueToOrientationChange']
        )
      } else if (_0x27498d == 'via_api') {
        ZoomSDK['ZoomInternal']['State']['setLastZoomResult'](ZoomSDK['ZoomTypes']['ZoomCaptureResult']['CancelCalled'])
      }
    }
    ZoomSDK['ZoomInternal']['FPA']['stop']()
    _0x44c745['cancelled'] = !![]
    if (
      ZoomSDK['ZoomInternal']['State']['captureState']() ===
      ZoomSDK['ZoomInternal']['State']['ZoomCaptureStates']['Ready']
    ) {
      return
    }
    ZoomSDK['ZoomInternal']['ZoomInterface']['transitionFromZoom']('cancel', function() {
      _0x5aacc7 = !![]
      if (_0x27498d) {
        ZoomSDK['ZoomInternal']['setSessionResultStatus'](ZoomSDK['ZoomTypes']['FailedDueToOSContextSwitch'])
      } else {
        ZoomSDK['ZoomInternal']['setSessionResultStatus'](ZoomSDK['ZoomTypes']['UserCancelled'])
      }
      if (!_0x471fcc) {
        if (
          ZoomSDK['ZoomInternal']['State']['captureState']() ===
          ZoomSDK['ZoomInternal']['State']['ZoomCaptureStates']['Ready']
        ) {
          return
        }
        ZoomSDK['ZoomInternal']['ZoomSessionProcessing']()
        ZoomSDK['ZoomInternal']['State']['setZoomCaptureComplete']()
        ZoomSDK['ZoomInternal']['State']['setZoomIsReadyForCapture']()
        ZoomSDK['ZoomInternal']['returnResults']({
          sessionData: null,
          sessionId: null,
          status: ZoomSDK['ZoomInternal']['State']['getLastZoomResult'](),
          faceMetrics: null
        })
      } else {
        ZoomSDK['ZoomInternal']['PhWeb']['buildSessionData']({ zoomData: _0x44c745 })
        _0x471fcc = ![]
      }
    })
    return !![]
  }
  function _0x56a118() {
    ZoomSDK['ZoomInternal']['FPA']['stop']()
    hardCrash()
  }
  return {
    onZoomFeedback: function(_0x287400) {
      _0x30ae86(_0x287400)
    },
    hasLeakedInformation: function() {
      return _0x471fcc
    },
    cancelZoomSession: function(_0x3c7d69) {
      return _0x17f397(_0x3c7d69)
    },
    init: function() {
      _0x397fdc()
    },
    sessionDiagnosticId: function() {
      return _0x44c745['diagnosticId']
    },
    highResImageCounts: function() {
      return {
        maximumFramesToCapture: _0x28392f,
        unzoomed: _0x44c745['highResUnzoomedFrames']['frames']['length'],
        betweeen: _0x44c745['highResBetweenFrames']['frames']['length'],
        zoomed: _0x44c745['highResZoomedFrames']['frames']['length']
      }
    }
  }
})()
ZoomSDK['ZoomInternal']['ZoomLockout'] = (function() {
  var _0x47d759 = []
  var _0x3235a5 = 0x0
  var _0x209bb7 = ![]
  var _0x334168 = ![]
  var _0x537e3d = 0x5 * 0x3c * 0x3e8
  var _0x4d4cf4 = 0x5 * 0x3c * 0x3e8
  var _0x30acb2 = 0x6
  var _0x3cb15e = 0xc
  var _0x1f3afb = 'zoom.lk'
  var _0x3adb7e = {
    initialize: function() {
      if (!_0x209bb7) {
        try {
          _0x4f1cb8()
          _0x209bb7 = !![]
        } catch (_0x1cb244) {}
      }
    },
    addFailure: function() {
      _0x47d759['push'](Date['now']())
      _0x1ef4cd()
    },
    updateLastFailure: function() {
      _0x47d759['pop']()
      ZoomSDK['ZoomInternal']['ZoomLockout']['addFailure']()
    },
    removeLastFailure: function() {
      _0x47d759['pop']()
      _0x1ef4cd()
    },
    isLockedOut: function() {
      var _0x871905 = ZoomSDK['ZoomInternal']['ZoomLockout']['getLockoutEndTime']()
      if (_0x871905 === ZoomSDK['ZoomInternal']['ZoomLockout']['getLockoutEndTime']()) {
        return Date['now']() < _0x871905
      } else {
        return ![]
      }
    },
    getLockoutData: function() {
      var _0x72b96f = _0x30acb2 - _0x47d759['length']
      return { lockoutTime: _0x3235a5, attemptsAvailable: _0x72b96f }
    },
    getLockoutLevel: function() {
      return 0x2
    },
    getLockoutEndTime: function() {
      _0x4305e3()
      if (_0x3235a5 != 0x0) {
        return _0x3235a5 + _0x537e3d
      } else {
        return null
      }
    },
    unloadResources: function() {
      window['removeEventListener']('beforeunload', _0x1ef4cd(), !![])
    }
  }
  function _0x4305e3() {
    var _0x227a77 = _0x47d759['length']
    if (_0x227a77 > 0x0) {
      var _0x1c0927 = _0x47d759[_0x47d759['length'] - 0x1]
      var _0x119484 = _0x1c0927 - _0x4d4cf4
      var _0x1f4fad = _0x47d759['filter'](function(_0x161e46) {
        return _0x161e46 > _0x119484
      })
      _0x47d759 = _0x1f4fad
      var _0x1a8b60 = _0x334168 ? _0x3cb15e : _0x30acb2
      if (_0x47d759['length'] >= _0x1a8b60) {
        _0x3235a5 = _0x1c0927
        _0x47d759 = []
      }
      if (_0x47d759['length'] != _0x227a77) {
        _0x1ef4cd()
      }
    }
  }
  function _0x4f1cb8() {
    var _0x89e24d
    var _0x1c8c7a
    try {
      _0x89e24d = localStorage['getItem'](_0x1f3afb)
    } catch (_0x3f3be3) {}
    if (!_0x89e24d) {
      _0x89e24d = JSON['stringify']({ fl: [], zlt: 0x0 })
    }
    try {
      _0x1c8c7a = JSON['parse'](_0x89e24d)
    } catch (_0x3e5d60) {}
    if (!_0x1c8c7a) {
      _0x1c8c7a = { fl: [], zlt: 0x0 }
    }
    var _0x1220cd = _0x1c8c7a
    _0x47d759 = _0x1220cd['fl'] || []
    _0x3235a5 = _0x1220cd['zlt'] || 0x0
    window['addEventListener']('beforeunload', _0x1ef4cd(event), !![])
  }
  function _0x1ef4cd() {
    var _0x40a0b1
    try {
      _0x40a0b1 = { fl: _0x47d759, zlt: _0x3235a5 }
      var _0x5b2d6d = JSON['stringify'](_0x40a0b1)
      localStorage['setItem'](_0x1f3afb, _0x5b2d6d)
    } catch (_0x4efae8) {}
  }
  return _0x3adb7e
})()
ZoomSDK['Current'] = (function() {
  return { zoomVersion: '7.1.2' }
})()
ZoomSDK['ZoomInternal']['FTComputeFaceFeedback'] = (function() {
  var _0x73ee27 = ![]
  var _0x254f86 = ![]
  var _0x377b1c = function(_0x132cd2, _0x497d01, _0x414387) {
    var _0x286571 = { file: {} }
    var _0x13b5d4 = _0x132cd2['points']
    var _0x218ce8
    var _0x1b526b = ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceUprightness']['FACE_UPRIGHT']
    var _0x58f71e = _0x13b5d4[0x0]
    var _0x590e7b = _0x13b5d4[0x1b]
    var _0x1f4190 = _0x13b5d4[0x10]
    var _0x296a80 = _0x13b5d4[0x24]
    var _0x58b0b4 = Math['abs'](_0x58f71e['x'] - _0x590e7b['x'])
    var _0x5ea0bf = Math['abs'](_0x1f4190['x'] - _0x296a80['x'])
    var _0x39ab64 = Math['abs'](_0x58b0b4 - _0x5ea0bf) / Math['abs'](_0x1f4190['x'] - _0x58f71e['x'])
    _0x286571['file'][ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_YAW_COMPUTED']] = _0x39ab64
    var _0x33f455 = ZoomSDK['ZoomInternal']['Px']['computeFaceYaw'](_0x39ab64)
    var _0x485541 = _0x33f455
    _0x218ce8 = ZoomSDK['ZoomInternal']['Px']['computeAngleBetweenPoints'](_0x296a80, _0x590e7b)
    if (_0x218ce8 < 0.001 && _0x218ce8 > -0.001) {
      _0x218ce8 = 0x0
    }
    _0x1b526b = ZoomSDK['ZoomInternal']['Px']['computeFaceUprightness'](_0x218ce8, _0x254f86)
    _0x286571['file'][ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_UPRIGHTNESS_']] = _0x1b526b
    _0x286571['file'][ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_ROTATION_ANGLE']] = _0x218ce8
    _0x286571['file'][ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_VECTOR_ANGLE_']] = _0x218ce8
    if (_0x1b526b === ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceUprightness']['FACE_UPRIGHT']) {
      _0x286571['file'][ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_UPRIGHTNESS']] =
        ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceUprightness']['FACE_UPRIGHT']
    } else {
      if (_0x1b526b != ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceUprightness']['FACE_UPRIGHT']) {
        _0x286571['file'][ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_UPRIGHTNESS']] = _0x1b526b
      } else {
      }
    }
    var _0x17da50 = _0x1b526b
    var _0x10389d
    var _0x50ff39
    var _0x4a8cca = _0x13b5d4[0x0]['x'] / _0x497d01
    var _0xba179a = _0x13b5d4[0x10]['x'] / _0x497d01
    var _0x2f159b = _0xba179a - _0x4a8cca
    var _0x483bff = ZoomSDK['ZoomInternal']['Px']['computeFaceSizeClassFromNormalizedFaceSizeFromTemples'](_0x2f159b)
    var _0x208a73 = ZoomSDK['ZoomInternal']['Px']['computeFaceSizeVerticalCenterednessFromCascadeRect'](
      _0x132cd2['rect'],
      _0x414387
    )
    var _0x4268e7 = ZoomSDK['ZoomInternal']['Px']['computeFaceSizeCenterednessFromTemples'](_0x4a8cca, _0xba179a)
    if (_0x4268e7 === ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceCenterednessCategory']['CENTERED']) {
      _0x4268e7 = ZoomSDK['ZoomInternal']['Px']['computeFaceSizeHorizontalCenterednessFromCascadeRect'](
        _0x132cd2['rect'],
        _0x414387
      )
    }
    _0x286571['file'][ZoomSDK['ZoomInternal']['Px']['Constants']['ZOOM_FACE_CENTEREDNESS_CATEGORY']] = _0x4268e7
    var _0x5e71d7 = -0x3e8
    switch (_0x483bff) {
      case ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceSizeCategory']['SMALLER_THAN_UNZOOMED']:
        _0x10389d = ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['MOVE_FACE_CLOSER']
        _0x5e71d7 = ZoomSDK['ZoomInternal']['Px']['computeDistanceFromOptimumUnzoomedFrame'](_0x2f159b)
        break
      case ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceSizeCategory']['UNZOOMED']:
        _0x5e71d7 = ZoomSDK['ZoomInternal']['Px']['computeDistanceFromOptimumUnzoomedFrame'](_0x2f159b)
        if (
          _0x4268e7 ===
          ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceCenterednessCategory']['FACE_CENTERED_TOO_FAR_RIGHT']
        ) {
          _0x10389d = ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['FACE_CENTERED_TOO_FAR_RIGHT']
        } else if (
          _0x4268e7 ===
          ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceCenterednessCategory']['FACE_CENTERED_TOO_FAR_LEFT']
        ) {
          _0x10389d = ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['FACE_CENTERED_TOO_FAR_LEFT']
        } else if (
          _0x208a73 ===
          ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceCenterednessCategory']['FACE_CENTERED_TOO_FAR_BOTTOM']
        ) {
          _0x10389d = ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['FACE_CENTERED_TOO_FAR_BOTTOM']
        } else if (
          _0x208a73 ===
          ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceCenterednessCategory']['FACE_CENTERED_TOO_FAR_TOP']
        ) {
          _0x10389d = ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['FACE_CENTERED_TOO_FAR_TOP']
        } else if (
          _0x208a73 === ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceCenterednessCategory']['NOT_CENTERED']
        ) {
          _0x10389d = ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['NOT_CENTERED']
        } else if (
          _0x17da50 === ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceUprightness']['FACE_ROTATED_TOO_FAR_RIGHT']
        ) {
          _0x10389d = ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['FACE_ROTATED_TOO_FAR_RIGHT']
        } else if (
          _0x17da50 === ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceUprightness']['FACE_ROTATED_TOO_FAR_LEFT']
        ) {
          _0x10389d = ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['FACE_ROTATED_TOO_FAR_LEFT']
        } else if (
          _0x485541 !== ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceYaw']['FACE_LOOKING_STRAIGHT_AHEAD']
        ) {
          _0x10389d = ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['FACE_NOT_LOOKING_STRAIGHT_AHEAD']
        } else {
          _0x10389d = ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['HOLD_STEADY']
        }
        break
      case ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceSizeCategory']['BETWEEN_UNZOOMED_AND_ZOOMED']:
        _0x10389d = ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['MOVE_FACE_FURTHER_AWAY']
        _0x5e71d7 = ZoomSDK['ZoomInternal']['Px']['computeDistanceFromOptimumBetweenFrame'](_0x2f159b)
        break
      case ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceSizeCategory']['ZOOMED']:
        _0x10389d = ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['MOVE_FACE_FURTHER_AWAY']
        _0x5e71d7 = ZoomSDK['ZoomInternal']['Px']['computeDistanceFromOptimumZoomedFrame'](_0x2f159b)
        break
      case ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceSizeCategory']['BIGGER_THAN_ZOOMED']:
        _0x10389d = ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['MOVE_FACE_FURTHER_AWAY']
        _0x5e71d7 = ZoomSDK['ZoomInternal']['Px']['computeDistanceFromOptimumZoomedFrame'](_0x2f159b)
        break
    }
    switch (_0x483bff) {
      case ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceSizeCategory']['SMALLER_THAN_UNZOOMED']:
        _0x50ff39 = ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['MOVE_FACE_CLOSER']
        break
      case ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceSizeCategory']['UNZOOMED']:
        _0x50ff39 = ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['MOVE_FACE_CLOSER']
        break
      case ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceSizeCategory']['BETWEEN_UNZOOMED_AND_ZOOMED']:
        _0x50ff39 = ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['MOVE_FACE_CLOSER']
        break
      case ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceSizeCategory']['ZOOMED']:
        if (_0x485541 !== ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceYaw']['FACE_LOOKING_STRAIGHT_AHEAD']) {
          _0x50ff39 = ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['FACE_NOT_LOOKING_STRAIGHT_AHEAD']
        } else if (
          _0x4268e7 ===
          ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceCenterednessCategory']['FACE_CENTERED_TOO_FAR_RIGHT']
        ) {
          _0x50ff39 = ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['FACE_CENTERED_TOO_FAR_RIGHT']
        } else if (
          _0x4268e7 ===
          ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceCenterednessCategory']['FACE_CENTERED_TOO_FAR_LEFT']
        ) {
          _0x50ff39 = ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['FACE_CENTERED_TOO_FAR_LEFT']
        } else if (
          _0x208a73 ===
          ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceCenterednessCategory']['FACE_CENTERED_TOO_FAR_BOTTOM']
        ) {
          _0x50ff39 = ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['FACE_CENTERED_TOO_FAR_BOTTOM']
        } else if (
          _0x208a73 ===
          ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceCenterednessCategory']['FACE_CENTERED_TOO_FAR_TOP']
        ) {
          _0x50ff39 = ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['FACE_CENTERED_TOO_FAR_TOP']
        } else if (
          _0x208a73 === ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceCenterednessCategory']['NOT_CENTERED']
        ) {
          _0x50ff39 = ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['NOT_CENTERED']
        } else if (
          _0x17da50 === ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceUprightness']['FACE_ROTATED_TOO_FAR_LEFT']
        ) {
          _0x50ff39 = ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['FACE_ROTATED_TOO_FAR_LEFT']
        } else if (
          _0x17da50 === ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceUprightness']['FACE_ROTATED_TOO_FAR_RIGHT']
        ) {
          _0x50ff39 = ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['FACE_ROTATED_TOO_FAR_RIGHT']
        } else {
          _0x50ff39 = ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['HOLD_STEADY']
        }
        break
      case ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceSizeCategory']['BIGGER_THAN_ZOOMED']:
        _0x50ff39 = ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['MOVE_FACE_AWAY_A_LITTLE']
        break
    }
    _0x286571['file'][ZoomSDK['ZoomInternal']['Px']['Constants']['ZOOM_DISTANCE_FROM_OPTIMAL_FRAME']] = _0x5e71d7
    _0x286571['file'][ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_FTE_REASON']] = -0x1
    if (_0x17da50 !== ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceUprightness']['FACE_UPRIGHT']) {
      _0x286571['file']['fte'] = !![]
      _0x286571['file'][ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_FTE_REASON']] =
        ZoomSDK['ZoomInternal']['Px']['Constants']['PhFTEReason']['INVALID_FACE_POSE_NOT_UPRIGHT']
    } else if (_0x4268e7 !== ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceCenterednessCategory']['CENTERED']) {
      _0x286571['file']['fte'] = !![]
      _0x286571['file'][ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_FTE_REASON']] =
        ZoomSDK['ZoomInternal']['Px']['Constants']['PhFTEReason']['INVALID_FACE_POSE_NOT_CENTERED_TEMPLES']
    } else if (_0x208a73 != ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceCenterednessCategory']['CENTERED']) {
      _0x286571['file']['fte'] = !![]
      _0x286571['file'][ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_FTE_REASON']] =
        ZoomSDK['ZoomInternal']['Px']['Constants']['PhFTEReason']['INVALID_FACE_POSE_NOT_CENTERED_CASCADE']
    } else if (
      _0x483bff === ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceSizeCategory']['SMALLER_THAN_UNZOOMED']
    ) {
      _0x286571['file']['fte'] = !![]
      _0x286571['file'][ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_FTE_REASON']] =
        ZoomSDK['ZoomInternal']['Px']['Constants']['PhFTEReason']['INVALID_FACE_POSE_FACE_SIZE_SMALLER_THAN_UNZOOMED']
    } else if (_0x483bff === ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceSizeCategory']['BIGGER_THAN_ZOOMED']) {
      _0x286571['file']['fte'] = !![]
      _0x286571['file'][ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_FTE_REASON']] =
        ZoomSDK['ZoomInternal']['Px']['Constants']['PhFTEReason']['INVALID_FACE_POSE_FACE_SIZE_BIGGER_THAN_ZOOMED']
    } else if (_0x33f455 !== ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceYaw']['FACE_LOOKING_STRAIGHT_AHEAD']) {
      _0x286571['file']['fte'] = !![]
      _0x286571['file'][ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_FTE_REASON']] =
        ZoomSDK['ZoomInternal']['Px']['Constants']['PhFTEReason']['INVALID_FACE_POSE_NOT_LOOKING_STRAIGHT']
    }
    if (
      _0x483bff == ZoomSDK['ZoomInternal']['Px']['Constants']['ZoomFaceSizeCategory']['BETWEEN_UNZOOMED_AND_ZOOMED']
    ) {
      if (_0x73ee27 == !![] && _0x286571['file']['fte'] == !![]) {
        _0x286571['file']['fte'] = ![]
      } else {
        if (_0x73ee27 == ![]) {
        }
      }
    }
    var _0x2e44c4 = '-'
    _0x286571['file'][ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_computeEncodedFTEMeasurement']] = _0x2e44c4
    if (_0x286571['file'][ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_FTE_REASON']]) {
      var _0x13f892 = _0x286571['file'][ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_FTE_REASON']]
      if (_0x13f892 === ZoomSDK['ZoomInternal']['Px']['Constants']['PhFTEReason']['INVALID_FACE_POSE_NOT_UPRIGHT']) {
        _0x2e44c4 = _0x286571['file'][ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_VECTOR_ANGLE_']]['toPrecision'](
          0x3
        )
      } else if (
        _0x13f892 == ZoomSDK['ZoomInternal']['Px']['Constants']['PhFTEReason']['INVALID_FACE_POSE_NOT_CENTERED_TEMPLES']
      ) {
        _0x2e44c4 = '(R)\x20' + _0x4a8cca['toPrecision'](0x3) + '\x20(L)\x20' + _0xba179a['toPrecision'](0x3)
      } else if (
        _0x13f892 ===
          ZoomSDK['ZoomInternal']['Px']['Constants']['PhFTEReason'][
            'INVALID_FACE_POSE_FACE_SIZE_SMALLER_THAN_UNZOOMED'
          ] ||
        _0x13f892 ===
          ZoomSDK['ZoomInternal']['Px']['Constants']['PhFTEReason']['INVALID_FACE_POSE_FACE_SIZE_BIGGER_THAN_ZOOMED'] ||
        _0x13f892 ===
          ZoomSDK['ZoomInternal']['Px']['Constants']['PhFTEReason'][
            'INVALID_FACE_POSE_FACE_SIZE_BETWEEN_UNZOOMED_AND_ZOOMED'
          ]
      ) {
        _0x2e44c4 = _0x2f159b['toPrecision'](0x3)
      } else if (
        _0x13f892 ===
        ZoomSDK['ZoomInternal']['Px']['Constants']['PhFTEReason']['INVALID_FACE_POSE_NOT_LOOKING_STRAIGHT']
      ) {
        var _0x5c2016 = '(OLD)\x20' + _0x39ab64['toPrecision'](0x3)
        _0x2e44c4 = _0x5c2016
      }
      _0x286571['file'][ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_computeEncodedFTEMeasurement']] = _0x2e44c4
    }
    if (
      (_0x50ff39 == ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['HOLD_STEADY'] ||
        _0x10389d == ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['HOLD_STEADY']) &&
      _0x286571['file']['fte'] == !![]
    ) {
    }
    _0x286571['file'][
      ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_FEEDBACK_WHEN_LOOKING_FOR_ZOOMED']
    ] = _0x50ff39
    _0x286571['file'][
      ZoomSDK['ZoomInternal']['Px']['Constants']['FNKEY_FACE_FEEDBACK_WHEN_LOOKING_FOR_UNZOOMED']
    ] = _0x10389d
    return _0x286571
  }
  return {
    faceFeedback: function(_0x33019d, _0x38d5f1, _0x4907e5) {
      return _0x377b1c(_0x33019d, _0x38d5f1, _0x4907e5)
    }
  }
})()
if (typeof window !== 'undefined') {
  ZoomSDK['ZoomInternal']['ZoomString'] = {
    FeedbackALittleTooClose: 'feedback_a_little_too_close',
    FeedbackALittleTooCloseTablet: 'feedback_a_little_too_close_tablet',
    FeedbackCenterFace: 'feedback_center_face',
    FeedbackFaceNotFound: 'feedback_face_not_found',
    FeedbackNiceZoom: 'feedback_nice_zoom',
    FeedbackFaceNotLookingStraightAhead: 'feedback_face_not_looking_straight_ahead',
    FeedbackFaceNotUpright: 'feedback_face_not_upright',
    FeedbackFaceNotUprightMobile: 'feedback_face_not_upright_mobile',
    FeedbackHoldSteady: 'feedback_hold_steady',
    FeedbackMovePhoneAway: 'feedback_move_phone_away',
    FeedbackMoveTabletAway: 'feedback_move_tablet_away',
    FeedbackMoveAwayWeb: 'feedback_move_away_web',
    FeedbackMovePhoneCloser: 'feedback_move_phone_closer',
    FeedbackMoveCloserWeb: 'feedback_move_web_closer',
    FeedbackMovePhoneEvenCloser: 'feedback_move_phone_even_closer',
    FeedbackMoveWebEvenCloser: 'feedback_move_web_even_closer',
    FeedbackMoveTabletCloser: 'feedback_move_tablet_closer',
    FeedbackMovePhoneToEyeLevel: 'feedback_move_phone_to_eye_level',
    FeedbackMoveTabletToEyeLevel: 'feedback_move_tablet_to_eye_level',
    FeedbackMoveToEyeLevelWeb: 'feedback_move_to_eye_level_web',
    FeedbackUseEvenLighting: 'feedback_use_even_lighting',
    FeedbackWelcomeBack: 'feedback_welcome_back'
  }
  ZoomSDK['ZoomInternal']['ZoomString']['init'] = function() {
    if (typeof ZoomLocalizationStrings !== 'undefined') {
      try {
        Object['keys'](ZoomSDK['ZoomInternal']['ZoomString'])['map'](function(_0x3f6dbf) {
          if (ZoomLocalizationStrings[ZoomSDK['ZoomInternal']['ZoomString'][_0x3f6dbf]]) {
            ZoomSDK['ZoomInternal']['ZoomStrings'][ZoomSDK['ZoomInternal']['ZoomString'][_0x3f6dbf]] =
              ZoomLocalizationStrings[ZoomSDK['ZoomInternal']['ZoomString'][_0x3f6dbf]]
          }
        })
      } catch (_0x118065) {
        throw 'Error\x20Loading\x20ZoomLocalizations:\x20' + _0x118065['message']
      }
    }
  }
}
ZoomSDK['ZoomInternal']['UIFunctions'] = (function() {
  if (typeof window === 'undefined') {
    return
  }
  return {
    fadeIn: function(_0x488194, _0x1318d7, _0x4d63c2, _0x46e67b) {
      if (!_0x488194) {
        return
      }
      if (_0x488194['style']['getPropertyValue']('opacity') === '') {
        _0x488194['style']['setProperty']('opacity', 0x0)
      }
      _0x488194['style']['transition'] = 'opacity\x20' + _0x4d63c2 + 'ms'
      _0x488194['style']['opacity'] = _0x1318d7
      if (_0x46e67b) {
        setTimeout(function() {
          _0x46e67b()
        }, _0x4d63c2)
      }
    },
    fadeOut: function(_0x41d93b, _0x23fa62, _0x12ce46, _0x309aa3) {
      if (!_0x41d93b) {
        return
      }
      if (_0x41d93b['style']['getPropertyValue']('opacity') === '') {
        _0x41d93b['style']['setProperty']('opacity', 0x1)
      }
      _0x41d93b['style']['transition'] = 'opacity\x20' + _0x12ce46 + 'ms'
      _0x41d93b['style']['opacity'] = _0x23fa62
      if (_0x309aa3) {
        setTimeout(function() {
          _0x309aa3()
        }, _0x12ce46)
      }
    }
  }
})()
ZoomSDK['ZoomInternal']['ZAPI'] = (function() {
  var _0x169a3d = { DevMode: 0x0, ProductionMode: 0x1 }
  var _0x5a260e = {
    wasInitSuccessful: undefined,
    isWifiRequiredForDevMode: !![],
    auditTrailAvailable: ![],
    sendDiagnosticsToFaceTec: !![],
    cacheKey: undefined,
    applicationId: '',
    maxDiagnosticFramesToSend: 0xa,
    zoomModeFromMeta: _0x169a3d['DevMode'],
    isVersionDeprecated: ![],
    isLatestVersion: ![],
    motionDisabled: ![],
    imageSwapDisabled: ![],
    imageSwapThreshold: 0x0
  }
  var _0x10eedf = { apiSessionId: '', clientIp: '', applicationId: '' }
  var _0x14988d = function(_0x3f347f) {
    var _0x55a019
    var _0x1c0baf
    var _0x4a44b9
    if (navigator['languages']) {
      _0x55a019 = navigator['languages'][0x0] || 'en-US'
      _0x1c0baf = navigator['languages'][0x1] || 'en'
    } else {
      if (navigator['language']) {
        _0x55a019 = navigator['language']
        _0x1c0baf = 'en'
      } else {
        _0x55a019 = 'en-US'
        _0x1c0baf = 'en'
      }
    }
    if (_0x3f347f) {
      _0x4a44b9 = '|' + _0x3f347f
    } else {
      _0x4a44b9 = ''
    }
    return (
      'facetec|zoomweb|web|' +
      ZoomSDK['ZoomInternal']['Constants']['CLIENT_PACKAGE'] +
      '|' +
      ZoomSDK['ZoomInternal']['ZAPI']['Constants']['CLIENT_APPTOKEN'] +
      '|' +
      ZoomSDK['ZoomInternal']['Constants']['DEVICE_ID'] +
      '|' +
      ZoomSDK['ZoomInternal']['Constants']['DEVICE_MODEL'] +
      '|' +
      ZoomSDK['ZoomInternal']['Constants']['ZOOM_VERSION']() +
      '|' +
      _0x55a019 +
      '|' +
      _0x1c0baf +
      _0x4a44b9
    )
  }
  var _0x1f1814 = function(_0x383301, _0x10bd25, _0xe06094, _0x496122) {
    if (!ZoomSDK['ZoomInternal']['ZAPI']['Constants']['CLIENT_APPTOKEN'] && _0xe06094) {
      ZoomSDK['ZoomInternal']['ZAPI']['Constants']['CLIENT_APPTOKEN'] = _0xe06094
    }
    if (!_0xe06094) {
      var _0xe06094 = ZoomSDK['ZoomInternal']['ZAPI']['Constants']['CLIENT_APPTOKEN']
    }
    var _0x41084c = new XMLHttpRequest()
    _0x41084c['open'](_0x383301, _0x10bd25, !![])
    var _0x54594a
    _0x41084c['onloadstart'] = function(_0x3e418b) {
      _0x54594a = Date['now']()
    }
    _0x41084c['onloadend'] = function(_0x3abc79) {}
    _0x41084c['setRequestHeader']('X-App-Token', _0xe06094)
    _0x41084c['setRequestHeader']('Content-Type', 'application/json')
    _0x41084c['setRequestHeader']('X-User-Agent', _0x14988d(_0x496122))
    return _0x41084c
  }
  var _0x587d8e = function(_0x351661, _0x32de85, _0x14c660) {
    _0x351661['onload'] = function() {
      if (_0x14c660) {
        var _0x1cf653 = _0x351661['responseText']
        try {
          if (_0x351661['responseText'] === 'ok') {
          } else {
            _0x1cf653 = JSON['parse'](_0x351661['responseText'])
            if (
              _0x1cf653['meta']['message'] &&
              _0x1cf653['meta']['message']['indexOf']('504\x20GATEWAY_TIMEOUT') > 0x0
            ) {
              _0x1cf653['timeout'] = !![]
            }
          }
        } catch (_0x22203a) {
          console['warn']('Error\x20parsing\x20response:', _0x351661)
        }
        if (_0x14c660) {
          _0x14c660(_0x1cf653)
        }
      }
    }
    _0x351661['onerror'] = function() {
      console['log'](_0x351661)
      var _0x1bb35a
      if (_0x14c660) {
        try {
          _0x1bb35a = JSON['parse'](_0x351661['responseText'])
          if (_0x1bb35a['meta']['message'] && _0x1bb35a['meta']['message']['indexOf']('504\x20GATEWAY_TIMEOUT') > 0x0) {
            _0x1bb35a['timeout'] = !![]
          }
        } catch (_0x25f90c) {
          _0x1bb35a = { meta: { ok: ![], message: 'Request\x20Failed.\x20Possible\x20network\x20failure.' } }
          console['warn']('Error\x20parsing\x20response:', _0x351661)
          if (_0x14c660) {
            return _0x14c660(_0x1bb35a)
          }
        }
        if (_0x14c660) {
          _0x14c660(_0x1bb35a)
        }
      }
    }
    if (Object['keys'](_0x32de85)['length'] === 0x0 && _0x32de85['constructor'] === Object) {
      _0x351661['send']()
    } else {
      _0x351661['send'](_0x32de85)
    }
  }
  function _0x4b0733(_0x30cea5) {
    function _0x54968f() {
      var _0x4d99a4 = _0x30cea5['data']
      try {
        return {
          data: {
            id: _0x4d99a4['id'],
            appWhiteLabel: _0x4d99a4['wl'],
            appSendDiagnostics: _0x4d99a4['sd'],
            appReturnAuditTrail: _0x4d99a4['at'],
            auditTrailResolution: _0x4d99a4['tr'],
            diagnosticsSize: _0x4d99a4['ds'],
            gracePeriod: _0x4d99a4['gp'],
            algorithmSE: _0x4d99a4['se'],
            algorithmST: _0x4d99a4['st'],
            algorithmME: _0x4d99a4['me'],
            algorithmV0: _0x4d99a4['v0'],
            algorithmV1: _0x4d99a4['v1'],
            cacheKey: _0x4d99a4['ck'],
            isVersionDeprecated: _0x4d99a4['vd'],
            isLatestVersion: _0x4d99a4['lv'],
            companyType: _0x4d99a4['ct'],
            recentFailures: _0x4d99a4['rf'],
            applicationId: _0x4d99a4['ai'],
            isAmplitudeEnabled: _0x4d99a4['am'],
            ipAddress: _0x4d99a4['ip']
          }
        }
      } catch (_0x2f2c65) {
        throw 'Unable\x20to\x20decode\x20Api\x20Init\x20Response:\x20' + _0x2f2c65
      }
    }
    return _0x54968f()
  }
  function _0x19fed6(_0x5ad4d5, _0x12e596) {
    var _0x349e14 = localStorage['getItem']('zoom.installationID')
    var _0x1a1a9f
    if (!_0x349e14) {
      _0x1a1a9f = ZoomSDK['ZoomInternal']['ZoomNetworking']['uuid']()
      localStorage['setItem']('zoom.installationID', JSON['stringify'](_0x1a1a9f))
    } else {
      _0x1a1a9f = JSON['parse'](_0x349e14)
    }
    ZoomSDK['ZoomInternal']['Constants']['DEVICE_ID'] = _0x1a1a9f
    var _0xde2532 = _0x1f1814('POST', ZoomSDK['ZoomInternal']['ZAPI']['Constants']['ZAPI_INIT_URL'], _0x12e596)
    var _0x41b6be = {}
    _0x41b6be['clientPackage'] = ZoomSDK['ZoomInternal']['Constants']['CLIENT_PACKAGE']
    _0x41b6be['deviceId'] = ZoomSDK['ZoomInternal']['Constants']['DEVICE_ID']
    _0x41b6be['deviceModel'] = ZoomSDK['ZoomInternal']['Constants']['DEVICE_MODEL']
    _0x41b6be['deviceOSType'] = 'web'
    _0x41b6be['zoomVersion'] = ZoomSDK['ZoomInternal']['Constants']['ZOOM_VERSION']()
    var _0x5c36a7 = JSON['stringify'](_0x41b6be)
    var _0x1fd6e1 = Object['assign']({}, _0x5a260e)
    var _0x1a0703 = _0x1fd6e1
    _0x587d8e(_0xde2532, _0x5c36a7, function(_0x5812b7) {
      try {
        if (_0x5812b7['meta']['ok'] === !![]) {
          _0x1a0703 = _0x4b0733(_0x5812b7)
          _0x10eedf['apiSessionId'] = _0x1a0703['data']['id']
          _0x10eedf['clientIp'] = _0x1a0703['data']['ipAddress']
          _0x10eedf['applicationId'] = _0x1a0703['data']['applicationId']
          _0x1fd6e1['wasInitSuccessful'] = !![]
          _0x1fd6e1['cacheKey'] = _0x1a0703['data']['cacheKey']
          _0x1fd6e1['maxDiagnosticFramesToSend'] = _0x1a0703['data']['diagnosticsSize']
          _0x1fd6e1['auditTrailAvailable'] = _0x1a0703['data']['appReturnAuditTrail']
          _0x1fd6e1['sendDiagnosticsToFaceTec'] = _0x1a0703['data']['appSendDiagnostics']
          _0x1fd6e1['applicationId'] = _0x1a0703['applicationId']
          var _0x1ec3ab = _0x1a0703['data']['gracePeriod']
          var _0x3b9d01 = _0x1a0703['data']['wifiRequiredForDevToken']
          _0x1fd6e1['isWifiRequiredForDevMode'] = _0x3b9d01
          _0x1fd6e1['motionDisabled'] = !_0x1a0703['data']['algorithmME']
          _0x1fd6e1['imageSwapDisabled'] = !_0x1a0703['data']['algorithmSE']
          _0x1fd6e1['imageSwapThreshold'] = _0x1a0703['data']['algorithmST']
          if (_0x1a0703['meta']) {
            if (_0x1a0703['meta']['mode'] == 'dev') {
              _0x1fd6e1['zoomModeFromMeta'] = _0x169a3d['DevMode']
              _0x1fd6e1['isVersionDeprecated'] = _0x1a0703['data']['isVersionDeprecated']
            } else {
              _0x1fd6e1['zoomModeFromMeta'] = _0x169a3d['ProductionMode']
            }
          }
          _0x1fd6e1['isLatestVersion'] = _0x1a0703['data']['isLatestVersion']
        }
      } catch (_0x2b2b2b) {}
      if (_0x1fd6e1['wasInitSuccessful'] == !![]) {
        if (!_0x1fd6e1['isVersionDeprecated']) {
          _0x5ad4d5(_0x5812b7, _0x1a0703, _0x1fd6e1)
        } else {
          _0x5ad4d5(_0x5812b7, _0x1a0703, _0x1fd6e1)
        }
      } else if (_0x1fd6e1['wasInitSuccessful'] == ![]) {
        _0x5ad4d5(_0x5812b7, _0x1a0703, _0x1fd6e1)
      } else {
        _0x5ad4d5(_0x5812b7, _0x1a0703, _0x1fd6e1)
      }
    })
  }
  function _0x1430b5(_0x1959be, _0x14ce7e, _0xb26977) {
    var _0x4e5481 = ZoomSDK['ZoomInternal']['ZAPI']['Constants']['ZAPI_INIT_URL']
    if (_0x1959be) {
      _0x4e5481 += '/' + _0x1959be
    }
    var _0x4b4420 = _0x1f1814('POST', _0x4e5481)
    var _0x5a10ea = {}
    _0x5a10ea['event'] = _0x14ce7e
    var _0x560663 = JSON['stringify'](_0x5a10ea)
    _0x587d8e(_0x4b4420, _0x560663, function(_0x2fd944) {
      _0xb26977(_0x2fd944)
    })
  }
  return {
    init: function(_0x2b533e, _0x4e5f64) {
      _0x19fed6(_0x2b533e, _0x4e5f64)
    },
    checkServerStatus: function(_0x16c945) {
      var _0x20e815 = _0x1f1814('GET', ZoomSDK['ZoomInternal']['ZAPI']['Constants']['ZAPI_STATUS_URL'])
      _0x587d8e(_0x20e815, {}, function(_0x3fb8b9) {
        _0x16c945(_0x3fb8b9)
      })
    },
    sendZoomEvent: function(_0x3ed58d, _0x124c7a, _0x1e579a) {
      var _0x2f3473 = ZoomSDK['ZoomInternal']['ZAPI']['Constants']['ZAPI_INIT_URL']
      if (_0x3ed58d) {
        _0x2f3473 += '/' + _0x3ed58d
      }
      var _0x2b379e = _0x1f1814('POST', _0x2f3473)
      var _0x5845b4 = {}
      _0x5845b4['event'] = _0x124c7a
      var _0x210b3f = JSON['stringify'](_0x5845b4)
      _0x587d8e(_0x2b379e, _0x210b3f, function(_0x3d5fda) {
        _0x1e579a(_0x3d5fda)
      })
    },
    sessionStart: function(_0x3353bc, _0x4c94bf) {
      ZoomSDK['ZoomInternal']['ZAPI']['sendZoomEvent'](_0x10eedf['apiSessionId'], 'verifySessionStart', _0x4c94bf)
    },
    createZapiRequest: function(_0x5509db, _0x45882c, _0x3dfdbc) {
      return _0x1f1814(_0x5509db, _0x45882c, _0x3dfdbc)
    },
    sendZapiRequest: function(_0x5ef98a, _0xc0d66e, _0x2f56d4) {
      _0x587d8e(_0x5ef98a, _0xc0d66e, _0x2f56d4)
    },
    applicationData: _0x10eedf,
    createZoomAPIUserAgentString: function(_0xa5aa89) {
      return _0x14988d(_0xa5aa89)
    }
  }
})()
ZoomSDK['ZoomInternal']['ZAPI']['Constants'] = (function() {
  var _0x58b46c = 'https://api.zoomauth.com/api/v1'
  var _0x3a09f0 = _0x58b46c
  var _0x3fef4c = null
  if (typeof window !== 'undefined') {
    var _0x5b8d9d = window['location']['hostname']
    var _0x447cd9 = window['location']['port']
    if (
      typeof ZAPI_QA_URL_PREFIX == 'undefined' ||
      'dev.zoomlogin.com@browser.zoomlogin.com'['indexOf'](_0x5b8d9d) > -0x1 ||
      (_0x5b8d9d === 'cache.zoomauth.com' && _0x447cd9 == '2222')
    ) {
      _0x3a09f0 = _0x58b46c
    }
  }
  return {
    ZAPI_URL_PREFIX: _0x3a09f0,
    CLIENT_APPTOKEN: _0x3fef4c,
    ZAPI_INIT_URL: _0x3a09f0 + '/zoom/session',
    ZAPI_STATUS_URL: _0x3a09f0 + '/biometrics/status',
    ZAPI_ZOOMCONFIG_URL: _0x3a09f0 + '/application/current/zoomconfig'
  }
})()
ZoomSDK['ZoomInternal']['ZoomInterface']['Oval'] = (function() {
  if (typeof window === 'undefined') {
    return {}
  }
  var _0xc39edf = 0.72
  var _0x16c617 = 0.98
  var _0x5ac51c = 1.48
  var _0x4d9e3a = 1.7
  var _0x5def07 = 0x64
  var _0x54cc78 = 0x280
  var _0x14e05a = 'zoom-oval-zoom-standard'
  var _0x6c6a08
  var _0x27c033
  var _0x3278ff
  var _0x15d895
  var _0x4c7d9c
  var _0x1818cf
  var _0x521d18
  var _0x2fabf1
  var _0x564d5b
  var _0x411d24
  var _0x2d5d0f
  var _0x2d4d44 = !![]
  var _0x3ffe85 = !![]
  var _0xe84f77
  var _0x29515a
  var _0xa38c93
  var _0xe410c3 = ![]
  var _0xed8e9 =
    ZoomSDK['ZoomInternal']['ZoomCustomization']['currentCustomization']['ovalCustomization']['progressStrokeWidth']
  function _0x499b87() {
    var _0x5aac02 = document['createElement']('style')
    var _0xce6fa2 =
      ZoomSDK['ZoomInternal']['ZoomCustomization']['currentCustomization']['ovalCustomization']['progressColor1']
    var _0x150276 =
      ZoomSDK['ZoomInternal']['ZoomCustomization']['currentCustomization']['ovalCustomization']['progressColor2']
    var _0x2f0032 = Math['round']((((_0xed8e9 * _0x29515a) / _0x54cc78) * _0xe84f77) / _0x29515a)
    _0x5aac02['innerHTML'] +=
      '@keyframes\x20face-spin{' +
      '0%\x20{stroke-dashoffset:' +
      _0x411d24 / 0x2 +
      ';\x20stroke:' +
      _0xce6fa2 +
      ';}' +
      '40%\x20{stroke:' +
      _0x150276 +
      ';}' +
      '100%\x20{stroke-dashoffset:' +
      (_0x411d24 / 0x2 + 0x2 * _0x411d24 * (0x3 / 0x4)) +
      ';stroke-opacity:0;}}' +
      '.zoom-face-spinner\x20{' +
      'stroke-dasharray:\x20' +
      _0x411d24 / 0x2 +
      ';' +
      'stroke-linecap:round;' +
      'stroke-width:\x20' +
      _0x2f0032 +
      ';' +
      'animation:\x20face-spin\x201.4s\x20cubic-bezier(0.4,\x201,\x200.3,\x201);}'
    document['head']['appendChild'](_0x5aac02)
  }
  function _0x28fcb6(_0x3d23c2, _0xc7a0b5, _0x3fb97f) {
    if (!_0x3fb97f) {
      _0x3fb97f = 0x1
    }
    var _0x495b30 = {}
    _0x495b30['p'] = []
    _0x495b30['mx'] = Math['round']((_0x29515a - (_0x3d23c2 * 0x2 + _0x3fb97f / 0x2)) / 0x2)
    _0x495b30['my'] = Math['round'](_0xe84f77 / 0x2)
    _0x495b30['arc'] = 'a' + _0x3d23c2
    _0x495b30['p'][0x0] = _0x495b30['arc']
    _0x495b30['p'][0x1] = _0xc7a0b5
    _0x495b30['p'][0x2] = 0x0
    _0x495b30['p'][0x3] = 0x1
    _0x495b30['p'][0x4] = 0x0
    _0x495b30['p'][0x5] = _0x3d23c2 * 0x2
    _0x495b30['p'][0x6] = 0x0
    _0x495b30['p'][0x7] = _0x495b30['arc']
    _0x495b30['p'][0x8] = _0xc7a0b5
    _0x495b30['p'][0x9] = 0x0
    _0x495b30['p'][0xa] = 0x1
    _0x495b30['p'][0xb] = 0x0
    _0x495b30['p'][0xc] = _0x3d23c2 * -0x2
    _0x495b30['p'][0xd] = 0x0
    var _0x4220f1 = 'm' + _0x495b30['mx'] + '\x20' + _0x495b30['my'] + '\x20'
    for (var _0x7a7ee = 0x0; _0x7a7ee < _0x495b30['p']['length']; _0x7a7ee++) {
      _0x4220f1 += '\x20' + _0x495b30['p'][_0x7a7ee]
    }
    return _0x4220f1
  }
  function _0x5b1fe6() {
    var _0x2266d5
    var _0x518150 = _0xe84f77 / _0xa38c93
    var _0x34108d = Math['round']((_0x518150 - 1.4883720930232558) * _0x5def07)
    _0x6c6a08 = _0xa38c93 * _0xc39edf
    _0x27c033 = Math['round'](_0x6c6a08 / 0x2)
    _0x3278ff = _0x6c6a08 * _0x5ac51c
    _0x15d895 = Math['round'](_0x3278ff / 0x2)
    _0x4c7d9c = Math['round'](_0xa38c93 * _0x16c617)
    _0x1818cf = Math['round'](_0x4c7d9c * _0x4d9e3a)
    _0x521d18 = (_0x4c7d9c / _0x6c6a08)['toFixed'](0x2)
    _0x2fabf1 = (_0x1818cf / _0x3278ff)['toFixed'](0x2)
    var _0x7a2ac8 =
      (ZoomSDK['ZoomInternal']['ZoomCustomization']['currentCustomization']['ovalCustomization']['strokeWidth'] *
        _0x29515a) /
      _0x54cc78
    _0x7a2ac8 = Math['round']((_0x7a2ac8 * _0xe84f77) / _0x29515a)
    var _0x2bc12a = _0x28fcb6(_0x27c033, _0x15d895, _0x7a2ac8)
    var _0x2bb2a4 = _0x27c033 * 0.9
    var _0x546fce = _0x15d895 * 0.9
    if (ZoomSDK['getBrowserSupport']()['isMobileDevice'] == !![]) {
      _0x2bb2a4 = _0x27c033 * 0.88
      _0x546fce = _0x15d895 * 0.91
    }
    _0x564d5b = _0x28fcb6(_0x2bb2a4, _0x546fce, _0xed8e9)
    _0x2d5d0f = document['getElementById'](
      ZoomSDK['ZoomInternal']['ZoomInterface']['zoomDomElements']['ovalFaceSpinner']
    )
    _0x411d24 = 0x2 * 3.14 * Math['sqrt']((Math['pow'](_0x2bb2a4 / 0x2, 0x2) + Math['pow'](_0x546fce / 0x2, 0x2)) / 0x2)
    _0x499b87()
    var _0x5eda66 = {}
    _0x5eda66['coords'] = []
    _0x5eda66['mx'] = 0x0
    _0x5eda66['my'] = 0x0
    _0x5eda66['coords'][0x0] = { x: 0x0, y: _0xe84f77 }
    _0x5eda66['coords'][0x1] = { x: _0x29515a, y: 0x0 }
    _0x5eda66['coords'][0x2] = { x: 0x0, y: -_0xe84f77 }
    _0x5eda66['coords'][0x3] = { x: -_0x29515a, y: 0x0 }
    _0x2266d5 = _0x2bc12a + '\x20M' + _0x5eda66['mx'] + '\x20' + _0x5eda66['my']
    _0x5eda66['coords']['forEach'](function(_0x20473d) {
      _0x2266d5 += '\x20l' + _0x20473d['x'] + '\x20' + _0x20473d['y']
    })
    document['getElementById']('zoom-oval-combined-path')['setAttribute']('d', _0x2266d5)
    document['getElementById']('zoom-oval-path')['setAttribute']('d', _0x2bc12a)
    document['getElementById']('zoom-oval-path')['style']['strokeWidth'] = _0x7a2ac8
    document['getElementById']('zoom-oval-path')['style']['stroke'] =
      ZoomSDK['ZoomInternal']['ZoomCustomization']['currentCustomization']['ovalCustomization']['strokeColor']
    document['getElementById']('zoom-oval-path')['style']['fill'] = 'none'
    document['getElementById']('zoom-oval-combined-path')['style']['strokeWidth'] = _0x7a2ac8
    document['getElementById']('zoom-oval-combined-path')['style']['fill'] =
      ZoomSDK['ZoomInternal']['ZoomCustomization']['currentCustomization']['frameCustomization']['backgroundColor']
    document['getElementById']('zoom-oval-combined-path')['style']['fillRule'] = 'evenodd'
    document['getElementById']('zoom-oval-combined-path')['style']['stroke'] = 'none'
  }
  function _0x50a559(_0x4d0da7) {
    _0x3ffe85 = ![]
    _0x2d4d44 = ![]
    _0x2d5d0f['classList']['add']('zoom-face-spinner')
    _0x2d5d0f['setAttribute']('d', _0x564d5b)
    _0x4d0da7()
  }
  function _0x26671c() {
    if (document['getElementById']('zoom-oval-zoom')) {
      _0x33e32b(ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['HOLD_STEADY'])
      document['getElementById']('zoom-oval-path')['classList']['add']('zoom-complete-expand-path')
      document['getElementById']('zoom-oval-zoom')['classList']['add']('zoom-complete-expand')
    }
  }
  function _0x33e32b(_0x18c6f5) {
    if (_0x3ffe85 === !![] && _0x2d4d44 == ![]) {
      var _0x41051d = _0x2d5d0f['cloneNode'](!![])
      _0x2d5d0f['parentNode']['replaceChild'](_0x41051d, _0x2d5d0f)
      _0x2d5d0f = _0x41051d
      _0x2d4d44 = !![]
    }
    if (_0x18c6f5 === ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['HOLD_STEADY']) {
      if (_0x3ffe85 === !![]) {
        _0x50a559(function() {
          setTimeout(function() {
            _0x3ffe85 = !![]
          }, 0x3e8)
        })
      }
    }
  }
  return {
    startFaceOvalSpinner: function(_0x7000e7) {
      _0x50a559(_0x7000e7)
    },
    init: function(_0x3dc33f) {
      _0xe84f77 = _0x3dc33f['canvasHeight']
      _0x29515a = _0x3dc33f['canvasWidth']
      _0xa38c93 = _0x3dc33f['captureWidth']
      document['getElementById']('zoom-oval-zoom')['classList']['remove'](_0x14e05a)
      document['getElementById']('zoom-oval-zoom')['style']['visibility'] = 'hidden'
      document['getElementById']('zoom-oval-zoom')['style']['transition'] = ''
      document['getElementById']('zoom-oval-zoom')['style']['transform'] = ''
      _0x5b1fe6()
      document['getElementById']('zoom-oval-combined-path')['style']['fillOpacity'] = 0.9
      document['getElementById']('zoom-oval-svg')['style']['opacity'] = 0x0
    },
    expandOval: function() {
      if (_0xe410c3) {
        return
      }
      _0xe410c3 = !![]
      document['getElementById']('zoom-oval-zoom')['style']['transition'] = 'transform\x201.2s'
      document['getElementById']('zoom-oval-zoom')['style']['transform'] =
        'scale(' + _0x521d18 + ',\x20' + _0x2fabf1 + ')'
      _0x33e32b(ZoomSDK['ZoomInternal']['Px']['FaceFeedbackString']['HOLD_STEADY'])
    },
    show: function() {
      _0xe410c3 = ![]
      document['getElementById']('zoom-oval-zoom')['style']['transition'] = ''
      document['getElementById']('zoom-oval-zoom')['style']['transform'] = ''
      document['getElementById']('zoom-oval-combined-path')['classList']['remove']('zoom-oval-comnbined-path-bright')
      document['getElementById']('zoom-oval-zoom')['classList']['remove']('zoom-complete-expand')
      document['getElementById']('zoom-oval-path')['classList']['remove']('zoom-complete-expand-path')
      document['getElementById']('zoom-oval-combined-path')['style']['fill-opacity'] = 0.9
      document['getElementById']('zoom-oval-zoom')['style']['visibility'] = 'visible'
      ZoomSDK['ZoomInternal']['UIFunctions']['fadeIn'](document['getElementById']('zoom-oval-zoom'), 0x1, 0xc8)
    },
    haveAnimatedOval: _0xe410c3,
    ripple: function() {
      _0x26671c()
    },
    handleOvalSpinnerOnHoldSteadyFeedback: function(_0x55a1bd) {
      _0x33e32b(_0x55a1bd)
    },
    unload: function() {
      _0xe410c3 = ![]
    }
  }
})()
