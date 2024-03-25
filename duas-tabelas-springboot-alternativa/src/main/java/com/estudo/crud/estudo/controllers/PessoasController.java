package com.estudo.crud.estudo.controllers;

import com.estudo.crud.estudo.models.PessoasModel;
import com.estudo.crud.estudo.services.PessoasService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.awt.print.Pageable;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/")
@CrossOrigin
public class PessoasController {
    private final PessoasService pessoasService;

    @GetMapping
    public List<PessoasModel> getAll() {
        return pessoasService.findAll();
    }

    @GetMapping("{id}")
    public PessoasModel getById(@PathVariable Long id) {
        return pessoasService.findById(id);
    }

    @PostMapping
    public PessoasModel save(@RequestBody PessoasModel pessoasModel) {
        return pessoasService.save(pessoasModel);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        pessoasService.deleteById(id);
    }

    @PutMapping("{id}")
    public PessoasModel updateById(@PathVariable Long id, @RequestBody PessoasModel pessoasModel) {
        return pessoasService.updateById(id, pessoasModel);
    }

}
