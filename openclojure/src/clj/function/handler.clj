(ns function.handler)

(defn handler [req]
  {:status 200
   :body "Ceau Mami"
   :headers {}})

(def app
  (-> handler))
