[client] -send a request => [server] -send a resopnse => [client]

[client] -send a request => [DNS Server] => [CDN] => [server] -send a resopnse => [client]

| Not RESTful           | RESTful                                                     |
| --------------------- | ----------------------------------------------------------- |
|`/createHubs`          | POST `/hubs`                                                |
|`/listHubMessages/:id` | GET `/hubs/:id/messages`                                    |
|`/countHubMessages/:id`| GET `/hubs/:id/messages` add a `count` prop to the response |

Separation of Concerns

https://www.google.com/search <- This is the actual url
? <- marks the beginning of the `query string`
q=route+song <- key value pair with parameters
& <- key value pair separator
rlz=1C5CHFA_enUS772US772
&
oq=route+song
&
aqs=chrome..69i57j0l5.1039j0j7
&
sourceid=chrome
&
ie=UTF-8

```js
const query = {
    sourceid: chrome
};
```