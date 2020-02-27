(ns handler.core)

(defn handler [req]
  {:status 200
   :body "pffdsa"
   :headers {}})

(def function
  (-> handler))
