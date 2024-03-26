package com.estudo.crud.estudo.services;

import com.estudo.crud.estudo.models.DocumentosModel;
import com.estudo.crud.estudo.models.PessoasModel;
import com.estudo.crud.estudo.repositories.PessoasRepository;
import lombok.Builder;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PessoasService {
    private final PessoasRepository pessoasRepository;

    public Page<PessoasModel> findAll(Pageable pageable) {
        return pessoasRepository.findAll(pageable);
    }

    public PessoasModel findById(Long id) {
        return pessoasRepository.findById(id).orElseThrow();
    }

    public PessoasModel save(PessoasModel pessoasModel) {
        return pessoasRepository.save(pessoasModel);
    }

    public void deleteById(Long id) {
        pessoasRepository.deleteById(id);
    }

    public PessoasModel updateById(Long id, PessoasModel pessoasModel) {
        PessoasModel pessoa = findById(id);
        pessoa.setNome(pessoasModel.nome);
        pessoa.setSobrenome(pessoasModel.sobrenome);

        DocumentosModel documentosModel = pessoa.getDocumentosModel();
        if(documentosModel != null) {
            documentosModel.setCpf(pessoasModel.getDocumentosModel().getCpf());
        } else {
            documentosModel = new DocumentosModel();
            documentosModel.setCpf(pessoasModel.getDocumentosModel().getCpf());
            pessoa.setDocumentosModel(documentosModel);
        }

        return pessoasRepository.save(pessoa);
    }

}
