[client] -send a request => [server] -send a resopnse => [client]

[client] -send a request => [DNS Server] => [CDN] => [server] -send a resopnse => [client]

| Not RESTful           | RESTful                                                     |
| --------------------- | ----------------------------------------------------------- |
|`/createHubs`          | POST `/hubs`                                                |
|`/listHubMessages/:id` | GET `/hubs/:id/messages`                                    |
|`/countHubMessages/:id`| GET `/hubs/:id/messages` add a `count` prop to the response |