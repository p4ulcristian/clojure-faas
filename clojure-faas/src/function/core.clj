(ns function.core)

(defn handler [req]
  {:status 200
   :body "hmm"
   :headers {}})

(def app
  (-> handler))
