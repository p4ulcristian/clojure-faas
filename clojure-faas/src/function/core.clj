(ns function.core)

(defn handler [req]
  {:status 200
   :body "Hello, Clojure. It is Paul. 123"
   :headers {}})

(def app
  (-> handler))
