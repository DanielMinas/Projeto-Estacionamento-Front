import axios from "axios";

const api= "http://localhost:8080/estacionamento"
class EstacionamentoService{
  getAllEstacionamento(){
    return axios.get(api+"/getAll")
  }

  postEstacionamento(carro){
    return axios.post(api +"/add", carro)
  }
  getEstacionamentoId(carroId){
    return axios.get(api + "/get/" + carroId)
  }
  updateEstacionamento(carroId, carro){
    return axios.put(api +"/put/" +carroId, carro);
  }
  updateEstacionamentoSaida(carroId, carro){
    return axios.put(api +"/putSaida/" +carroId, carro);
  }
}

export default new EstacionamentoService();