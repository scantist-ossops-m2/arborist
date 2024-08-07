/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/edge.js TAP > clobbered and detached 1`] = `
Edge {
  "dev": false,
  "error": "DETACHED",
  "from": null,
  "invalid": false,
  "missing": false,
  "name": "aa",
  "optional": false,
  "overridden": false,
  "peer": false,
  "peerLocal": false,
  "spec": "",
  "to": null,
  "type": "prod",
  "valid": false,
  "workspace": false,
}
`

exports[`test/edge.js TAP > clobbered edge 1`] = `
Edge {
  "dev": false,
  "error": "DETACHED",
  "from": null,
  "invalid": false,
  "missing": false,
  "name": "b",
  "optional": false,
  "overridden": false,
  "peer": true,
  "peerLocal": false,
  "spec": "1.2.3",
  "to": null,
  "type": "peer",
  "valid": false,
  "workspace": false,
}
`

exports[`test/edge.js TAP > clobbering edge 1`] = `
Edge {
  "dev": false,
  "error": null,
  "from": Object {
    "addEdgeIn": Function addEdgeIn(edge),
    "addEdgeOut": Function addEdgeOut(edge),
    "edgesIn": Set {},
    "edgesOut": Map {
      "c" => Edge {
        "overridden": false,
      },
      "b" => Edge {
        "overridden": false,
      },
    },
    "explain": Function explain(),
    "isTop": false,
    "name": "a",
    "package": Object {
      "name": "a",
      "version": "1.2.3",
    },
    "packageName": "a",
    "parent": Object {
      "addEdgeIn": Function addEdgeIn(edge),
      "addEdgeOut": Function addEdgeOut(edge),
      "edgesIn": Set {},
      "edgesOut": Map {
        "missing" => Edge {
          "overridden": false,
        },
      },
      "explain": Function explain(),
      "isTop": true,
      "name": "top",
      "package": Object {
        "name": "top",
        "version": "1.2.3",
      },
      "packageName": "top",
      "parent": null,
      "resolve": Function resolve(n),
      "version": "1.2.3",
    },
    "resolve": Function resolve(n),
    "version": "1.2.3",
  },
  "invalid": false,
  "missing": false,
  "name": "b",
  "optional": false,
  "overridden": false,
  "peer": false,
  "peerLocal": false,
  "spec": "*",
  "to": Object {
    "addEdgeIn": Function addEdgeIn(edge),
    "addEdgeOut": Function addEdgeOut(edge),
    "edgesIn": Set {
      Edge {
        "overridden": false,
      },
    },
    "edgesOut": Map {},
    "explain": Function explain(),
    "isTop": false,
    "name": "b",
    "package": Object {
      "name": "b",
      "version": "1.2.3",
    },
    "packageName": "b",
    "parent": Object {
      "addEdgeIn": Function addEdgeIn(edge),
      "addEdgeOut": Function addEdgeOut(edge),
      "edgesIn": Set {},
      "edgesOut": Map {
        "missing" => Edge {
          "overridden": false,
        },
      },
      "explain": Function explain(),
      "isTop": true,
      "name": "top",
      "package": Object {
        "name": "top",
        "version": "1.2.3",
      },
      "packageName": "top",
      "parent": null,
      "resolve": Function resolve(n),
      "version": "1.2.3",
    },
    "resolve": Function resolve(n),
    "version": "1.2.3",
  },
  "type": "prod",
  "valid": true,
  "workspace": false,
}
`

exports[`test/edge.js TAP > invalid dependency 1`] = `
Edge {
  "dev": false,
  "error": "INVALID",
  "from": Object {
    "addEdgeIn": Function addEdgeIn(edge),
    "addEdgeOut": Function addEdgeOut(edge),
    "edgesIn": Set {},
    "edgesOut": Map {
      "b" => Edge {
        "overridden": false,
      },
    },
    "explain": Function explain(),
    "isTop": false,
    "name": "a",
    "package": Object {
      "name": "a",
      "version": "1.2.3",
    },
    "packageName": "a",
    "parent": Object {
      "addEdgeIn": Function addEdgeIn(edge),
      "addEdgeOut": Function addEdgeOut(edge),
      "edgesIn": Set {},
      "edgesOut": Map {
        "missing" => Edge {
          "overridden": false,
        },
      },
      "explain": Function explain(),
      "isTop": true,
      "name": "top",
      "package": Object {
        "name": "top",
        "version": "1.2.3",
      },
      "packageName": "top",
      "parent": null,
      "resolve": Function resolve(n),
      "version": "1.2.3",
    },
    "resolve": Function resolve(n),
    "version": "1.2.3",
  },
  "invalid": true,
  "missing": false,
  "name": "b",
  "optional": true,
  "overridden": false,
  "peer": false,
  "peerLocal": false,
  "spec": "1.69.420-nice",
  "to": Object {
    "addEdgeIn": Function addEdgeIn(edge),
    "addEdgeOut": Function addEdgeOut(edge),
    "edgesIn": Set {
      Edge {
        "overridden": false,
      },
    },
    "edgesOut": Map {},
    "explain": Function explain(),
    "isTop": false,
    "name": "b",
    "package": Object {
      "name": "b",
      "version": "1.2.3",
    },
    "packageName": "b",
    "parent": Object {
      "addEdgeIn": Function addEdgeIn(edge),
      "addEdgeOut": Function addEdgeOut(edge),
      "edgesIn": Set {},
      "edgesOut": Map {
        "missing" => Edge {
          "overridden": false,
        },
      },
      "explain": Function explain(),
      "isTop": true,
      "name": "top",
      "package": Object {
        "name": "top",
        "version": "1.2.3",
      },
      "packageName": "top",
      "parent": null,
      "resolve": Function resolve(n),
      "version": "1.2.3",
    },
    "resolve": Function resolve(n),
    "version": "1.2.3",
  },
  "type": "optional",
  "valid": false,
  "workspace": false,
}
`

exports[`test/edge.js TAP > missing optional dep is fine 1`] = `
Edge {
  "dev": false,
  "error": null,
  "from": Object {
    "addEdgeIn": Function addEdgeIn(edge),
    "addEdgeOut": Function addEdgeOut(edge),
    "edgesIn": Set {},
    "edgesOut": Map {
      "missing" => Edge {
        "overridden": false,
      },
    },
    "explain": Function explain(),
    "isTop": true,
    "name": "top",
    "package": Object {
      "name": "top",
      "version": "1.2.3",
    },
    "packageName": "top",
    "parent": null,
    "resolve": Function resolve(n),
    "version": "1.2.3",
  },
  "invalid": false,
  "missing": false,
  "name": "missing",
  "optional": true,
  "overridden": false,
  "peer": false,
  "peerLocal": false,
  "spec": "",
  "to": null,
  "type": "optional",
  "valid": true,
  "workspace": false,
}
`

exports[`test/edge.js TAP > new location, found dep 1`] = `
Edge {
  "dev": false,
  "error": null,
  "from": Object {
    "addEdgeIn": Function addEdgeIn(edge),
    "addEdgeOut": Function addEdgeOut(edge),
    "edgesIn": Set {},
    "edgesOut": Map {
      "aa" => Edge {
        "overridden": false,
      },
    },
    "explain": Function explain(),
    "isTop": false,
    "name": "b",
    "package": Object {
      "name": "bb",
      "version": "1.2.3",
    },
    "packageName": "bb",
    "parent": Object {
      "addEdgeIn": Function addEdgeIn(edge),
      "addEdgeOut": Function addEdgeOut(edge),
      "edgesIn": Set {},
      "edgesOut": Map {
        "b" => Edge {
          "overridden": false,
        },
      },
      "explain": Function explain(),
      "isTop": false,
      "name": "a",
      "package": Object {
        "name": "a",
        "version": "1.2.3",
      },
      "packageName": "a",
      "parent": Object {
        "addEdgeIn": Function addEdgeIn(edge),
        "addEdgeOut": Function addEdgeOut(edge),
        "edgesIn": Set {},
        "edgesOut": Map {
          "missing" => Edge {
            "overridden": false,
          },
        },
        "explain": Function explain(),
        "isTop": true,
        "name": "top",
        "package": Object {
          "name": "top",
          "version": "1.2.3",
        },
        "packageName": "top",
        "parent": null,
        "resolve": Function resolve(n),
        "version": "1.2.3",
      },
      "resolve": Function resolve(n),
      "version": "1.2.3",
    },
    "resolve": Function resolve(n),
    "version": "1.2.3",
  },
  "invalid": false,
  "missing": false,
  "name": "aa",
  "optional": false,
  "overridden": false,
  "peer": false,
  "peerLocal": false,
  "spec": "",
  "to": Object {
    "addEdgeIn": Function addEdgeIn(edge),
    "addEdgeOut": Function addEdgeOut(edge),
    "edgesIn": Set {
      Edge {
        "overridden": false,
      },
    },
    "edgesOut": Map {},
    "explain": Function explain(),
    "isTop": false,
    "name": "aa",
    "package": Object {
      "name": "aa",
      "version": "1.2.3",
    },
    "packageName": "aa",
    "parent": Object {
      "addEdgeIn": Function addEdgeIn(edge),
      "addEdgeOut": Function addEdgeOut(edge),
      "edgesIn": Set {},
      "edgesOut": Map {
        "b" => Edge {
          "overridden": false,
        },
      },
      "explain": Function explain(),
      "isTop": false,
      "name": "a",
      "package": Object {
        "name": "a",
        "version": "1.2.3",
      },
      "packageName": "a",
      "parent": Object {
        "addEdgeIn": Function addEdgeIn(edge),
        "addEdgeOut": Function addEdgeOut(edge),
        "edgesIn": Set {},
        "edgesOut": Map {
          "missing" => Edge {
            "overridden": false,
          },
        },
        "explain": Function explain(),
        "isTop": true,
        "name": "top",
        "package": Object {
          "name": "top",
          "version": "1.2.3",
        },
        "packageName": "top",
        "parent": null,
        "resolve": Function resolve(n),
        "version": "1.2.3",
      },
      "resolve": Function resolve(n),
      "version": "1.2.3",
    },
    "resolve": Function resolve(n),
    "version": "1.2.3",
  },
  "type": "prod",
  "valid": true,
  "workspace": false,
}
`

exports[`test/edge.js TAP > new location, missing dep again 1`] = `
Edge {
  "dev": false,
  "error": "MISSING",
  "from": Object {
    "addEdgeIn": Function addEdgeIn(edge),
    "addEdgeOut": Function addEdgeOut(edge),
    "edgesIn": Set {},
    "edgesOut": Map {
      "aa" => Edge {
        "overridden": false,
      },
    },
    "explain": Function explain(),
    "isTop": false,
    "name": "b",
    "package": Object {
      "name": "bb",
      "version": "1.2.3",
    },
    "packageName": "bb",
    "parent": Object {
      "addEdgeIn": Function addEdgeIn(edge),
      "addEdgeOut": Function addEdgeOut(edge),
      "edgesIn": Set {},
      "edgesOut": Map {
        "missing" => Edge {
          "overridden": false,
        },
      },
      "explain": Function explain(),
      "isTop": true,
      "name": "top",
      "package": Object {
        "name": "top",
        "version": "1.2.3",
      },
      "packageName": "top",
      "parent": null,
      "resolve": Function resolve(n),
      "version": "1.2.3",
    },
    "resolve": Function resolve(n),
    "version": "1.2.3",
  },
  "invalid": false,
  "missing": true,
  "name": "aa",
  "optional": false,
  "overridden": false,
  "peer": false,
  "peerLocal": false,
  "spec": "",
  "to": null,
  "type": "prod",
  "valid": false,
  "workspace": false,
}
`

exports[`test/edge.js TAP > old location, missing dep 1`] = `
Edge {
  "dev": false,
  "error": null,
  "from": Object {
    "addEdgeIn": Function addEdgeIn(edge),
    "addEdgeOut": Function addEdgeOut(edge),
    "edgesIn": Set {},
    "edgesOut": Map {
      "aa" => Edge {
        "overridden": false,
      },
    },
    "explain": Function explain(),
    "isTop": false,
    "name": "b",
    "package": Object {
      "name": "bb",
      "version": "1.2.3",
    },
    "packageName": "bb",
    "parent": Object {
      "addEdgeIn": Function addEdgeIn(edge),
      "addEdgeOut": Function addEdgeOut(edge),
      "edgesIn": Set {
        Edge {
          "overridden": false,
        },
      },
      "edgesOut": Map {},
      "explain": Function explain(),
      "isTop": false,
      "name": "b",
      "package": Object {
        "name": "b",
        "version": "1.2.3",
      },
      "packageName": "b",
      "parent": Object {
        "addEdgeIn": Function addEdgeIn(edge),
        "addEdgeOut": Function addEdgeOut(edge),
        "edgesIn": Set {},
        "edgesOut": Map {
          "missing" => Edge {
            "overridden": false,
          },
        },
        "explain": Function explain(),
        "isTop": true,
        "name": "top",
        "package": Object {
          "name": "top",
          "version": "1.2.3",
        },
        "packageName": "top",
        "parent": null,
        "resolve": Function resolve(n),
        "version": "1.2.3",
      },
      "resolve": Function resolve(n),
      "version": "1.2.3",
    },
    "resolve": Function resolve(n),
    "version": "1.2.3",
  },
  "invalid": false,
  "missing": false,
  "name": "aa",
  "optional": false,
  "overridden": false,
  "peer": false,
  "peerLocal": false,
  "spec": "",
  "to": Object {
    "addEdgeIn": Function addEdgeIn(edge),
    "addEdgeOut": Function addEdgeOut(edge),
    "edgesIn": Set {
      Edge {
        "overridden": false,
      },
    },
    "edgesOut": Map {},
    "explain": Function explain(),
    "isTop": false,
    "name": "aa",
    "package": Object {
      "name": "aa",
      "version": "1.2.3",
    },
    "packageName": "aa",
    "parent": Object {
      "addEdgeIn": Function addEdgeIn(edge),
      "addEdgeOut": Function addEdgeOut(edge),
      "edgesIn": Set {},
      "edgesOut": Map {
        "b" => Edge {
          "overridden": false,
        },
      },
      "explain": Function explain(),
      "isTop": false,
      "name": "a",
      "package": Object {
        "name": "a",
        "version": "1.2.3",
      },
      "packageName": "a",
      "parent": Object {
        "addEdgeIn": Function addEdgeIn(edge),
        "addEdgeOut": Function addEdgeOut(edge),
        "edgesIn": Set {},
        "edgesOut": Map {
          "missing" => Edge {
            "overridden": false,
          },
        },
        "explain": Function explain(),
        "isTop": true,
        "name": "top",
        "package": Object {
          "name": "top",
          "version": "1.2.3",
        },
        "packageName": "top",
        "parent": null,
        "resolve": Function resolve(n),
        "version": "1.2.3",
      },
      "resolve": Function resolve(n),
      "version": "1.2.3",
    },
    "resolve": Function resolve(n),
    "version": "1.2.3",
  },
  "type": "prod",
  "valid": true,
  "workspace": false,
}
`

exports[`test/edge.js TAP > peer dep at top level, nesting is ok 1`] = `
Edge {
  "dev": false,
  "error": null,
  "from": Object {
    "addEdgeIn": Function addEdgeIn(edge),
    "addEdgeOut": Function addEdgeOut(edge),
    "edgesIn": Set {},
    "edgesOut": Map {
      "a" => Edge {
        "overridden": false,
      },
    },
    "explain": Function explain(),
    "isTop": true,
    "name": "top",
    "package": Object {
      "name": "top",
      "version": "1.2.3",
    },
    "packageName": "top",
    "parent": null,
    "resolve": Function resolve(n),
    "version": "1.2.3",
  },
  "invalid": false,
  "missing": false,
  "name": "a",
  "optional": false,
  "overridden": false,
  "peer": true,
  "peerLocal": false,
  "spec": "1.2.3",
  "to": Object {
    "addEdgeIn": Function addEdgeIn(edge),
    "addEdgeOut": Function addEdgeOut(edge),
    "edgesIn": Set {
      Edge {
        "overridden": false,
      },
    },
    "edgesOut": Map {},
    "explain": Function explain(),
    "isTop": false,
    "name": "a",
    "package": Object {
      "name": "a",
      "version": "1.2.3",
    },
    "packageName": "a",
    "parent": Object {
      "addEdgeIn": Function addEdgeIn(edge),
      "addEdgeOut": Function addEdgeOut(edge),
      "edgesIn": Set {},
      "edgesOut": Map {
        "a" => Edge {
          "overridden": false,
        },
      },
      "explain": Function explain(),
      "isTop": true,
      "name": "top",
      "package": Object {
        "name": "top",
        "version": "1.2.3",
      },
      "packageName": "top",
      "parent": null,
      "resolve": Function resolve(n),
      "version": "1.2.3",
    },
    "resolve": Function resolve(n),
    "version": "1.2.3",
  },
  "type": "peer",
  "valid": true,
  "workspace": false,
}
`

exports[`test/edge.js TAP > peer dep below top level, nesting not ok 1`] = `
Edge {
  "dev": false,
  "error": "PEER LOCAL",
  "from": Object {
    "addEdgeIn": Function addEdgeIn(edge),
    "addEdgeOut": Function addEdgeOut(edge),
    "edgesIn": Set {},
    "edgesOut": Map {
      "aa" => Edge {
        "overridden": false,
      },
    },
    "explain": Function explain(),
    "isTop": false,
    "name": "a",
    "package": Object {
      "name": "a",
      "version": "1.2.3",
    },
    "packageName": "a",
    "parent": Object {
      "addEdgeIn": Function addEdgeIn(edge),
      "addEdgeOut": Function addEdgeOut(edge),
      "edgesIn": Set {},
      "edgesOut": Map {
        "missing" => Edge {
          "overridden": false,
        },
      },
      "explain": Function explain(),
      "isTop": true,
      "name": "top",
      "package": Object {
        "name": "top",
        "version": "1.2.3",
      },
      "packageName": "top",
      "parent": null,
      "resolve": Function resolve(n),
      "version": "1.2.3",
    },
    "resolve": Function resolve(n),
    "version": "1.2.3",
  },
  "invalid": false,
  "missing": false,
  "name": "aa",
  "optional": false,
  "overridden": false,
  "peer": true,
  "peerLocal": true,
  "spec": "1.2.3",
  "to": Object {
    "addEdgeIn": Function addEdgeIn(edge),
    "addEdgeOut": Function addEdgeOut(edge),
    "edgesIn": Set {
      Edge {
        "overridden": false,
      },
    },
    "edgesOut": Map {},
    "explain": Function explain(),
    "isTop": false,
    "name": "aa",
    "package": Object {
      "name": "aa",
      "version": "1.2.3",
    },
    "packageName": "aa",
    "parent": Object {
      "addEdgeIn": Function addEdgeIn(edge),
      "addEdgeOut": Function addEdgeOut(edge),
      "edgesIn": Set {},
      "edgesOut": Map {
        "aa" => Edge {
          "overridden": false,
        },
      },
      "explain": Function explain(),
      "isTop": false,
      "name": "a",
      "package": Object {
        "name": "a",
        "version": "1.2.3",
      },
      "packageName": "a",
      "parent": Object {
        "addEdgeIn": Function addEdgeIn(edge),
        "addEdgeOut": Function addEdgeOut(edge),
        "edgesIn": Set {},
        "edgesOut": Map {
          "missing" => Edge {
            "overridden": false,
          },
        },
        "explain": Function explain(),
        "isTop": true,
        "name": "top",
        "package": Object {
          "name": "top",
          "version": "1.2.3",
        },
        "packageName": "top",
        "parent": null,
        "resolve": Function resolve(n),
        "version": "1.2.3",
      },
      "resolve": Function resolve(n),
      "version": "1.2.3",
    },
    "resolve": Function resolve(n),
    "version": "1.2.3",
  },
  "type": "peer",
  "valid": false,
  "workspace": false,
}
`

exports[`test/edge.js TAP > peer dep below top level, parallel ok 1`] = `
Edge {
  "dev": false,
  "error": null,
  "from": Object {
    "addEdgeIn": Function addEdgeIn(edge),
    "addEdgeOut": Function addEdgeOut(edge),
    "edgesIn": Set {},
    "edgesOut": Map {
      "b" => Edge {
        "overridden": false,
      },
    },
    "explain": Function explain(),
    "isTop": false,
    "name": "a",
    "package": Object {
      "name": "a",
      "version": "1.2.3",
    },
    "packageName": "a",
    "parent": Object {
      "addEdgeIn": Function addEdgeIn(edge),
      "addEdgeOut": Function addEdgeOut(edge),
      "edgesIn": Set {},
      "edgesOut": Map {
        "missing" => Edge {
          "overridden": false,
        },
      },
      "explain": Function explain(),
      "isTop": true,
      "name": "top",
      "package": Object {
        "name": "top",
        "version": "1.2.3",
      },
      "packageName": "top",
      "parent": null,
      "resolve": Function resolve(n),
      "version": "1.2.3",
    },
    "resolve": Function resolve(n),
    "version": "1.2.3",
  },
  "invalid": false,
  "missing": false,
  "name": "b",
  "optional": false,
  "overridden": false,
  "peer": true,
  "peerLocal": false,
  "spec": "1.2.3",
  "to": Object {
    "addEdgeIn": Function addEdgeIn(edge),
    "addEdgeOut": Function addEdgeOut(edge),
    "edgesIn": Set {
      Edge {
        "overridden": false,
      },
    },
    "edgesOut": Map {},
    "explain": Function explain(),
    "isTop": false,
    "name": "b",
    "package": Object {
      "name": "b",
      "version": "1.2.3",
    },
    "packageName": "b",
    "parent": Object {
      "addEdgeIn": Function addEdgeIn(edge),
      "addEdgeOut": Function addEdgeOut(edge),
      "edgesIn": Set {},
      "edgesOut": Map {
        "missing" => Edge {
          "overridden": false,
        },
      },
      "explain": Function explain(),
      "isTop": true,
      "name": "top",
      "package": Object {
        "name": "top",
        "version": "1.2.3",
      },
      "packageName": "top",
      "parent": null,
      "resolve": Function resolve(n),
      "version": "1.2.3",
    },
    "resolve": Function resolve(n),
    "version": "1.2.3",
  },
  "type": "peer",
  "valid": true,
  "workspace": false,
}
`

exports[`test/edge.js TAP > return a human-readable representation of the edge obj, overridden=true 1`] = `
{
name: 'b',
spec: '1.2.3',
type: 'prod',
from: '',
to: '/node_modules/b',
overridden: true }
`

exports[`test/edge.js TAP > should return a human-readable representation of the edge obj 1`] = `
{
name: 'b',
spec: '1.2.3',
type: 'prod',
from: '',
to: '/node_modules/b' }
`

exports[`test/edge.js TAP convenience type getter flags > explanation 1`] = `
Object {
  "from": "a explanation",
  "name": "foo",
  "spec": "*",
  "type": "peerOptional",
}
`
