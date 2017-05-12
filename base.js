            var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
            function startDB() {
                dataBase = indexedDB.open("Salesforce", 1);
                dataBase.onupgradeneeded = function (e) {
                    active = dataBase.result;  
                    object = active.createObjectStore("Contacts", { keyPath : 'id', autoIncrement : true });
                    object.createIndex('by_FirstName', 'FirstName', { unique : false });
                    object.createIndex('by_LastName', 'LastName', { unique : true });
                    object.createIndex('by_AccountName', 'AccountName', { unique : true });
                    object.createIndex('by_Phone', 'Phone', { unique : true });
                    object.createIndex('by_Email', 'Email', { unique : true });

                    object = active.createObjectStore("Account", { keyPath : 'id', autoIncrement : true });
                    object.createIndex('by_Name', 'Name', { unique : false });
                    object.createIndex('by_AccountNumber', 'AccountNumber', { unique : false });
                    object.createIndex('by_Description', 'Description', { unique : false });
                };
                dataBase.onsuccess = function (e) {
                    console.warn("Base de datos creada con exito")
                };
                dataBase.onerror = function (e)  {
                    alert('Error cargando la base de datos');
                };
            }