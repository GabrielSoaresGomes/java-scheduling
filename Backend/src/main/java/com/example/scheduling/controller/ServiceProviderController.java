package com.example.scheduling.controller;

import com.example.scheduling.domain.ServiceProvider;
import com.example.scheduling.repository.ServiceProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/serviceProviders")
@CrossOrigin(origins = "*")
public class ServiceProviderController {

    @Autowired
    private ServiceProviderRepository serviceProviderRepository;

    @GetMapping
    public List<ServiceProvider> getAllServiceProviders() {
        return serviceProviderRepository.findAll();
    }

    @PostMapping
    public ServiceProvider createServiceProvider(@RequestBody ServiceProvider serviceProvider) {
        return serviceProviderRepository.save(serviceProvider);
    }

    @GetMapping("/{id}")
    public ServiceProvider getServiceProviderById(@PathVariable Long id) {
        return serviceProviderRepository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public ServiceProvider updateServiceProvider(@PathVariable Long id, @RequestBody ServiceProvider serviceProviderDetails) {
        ServiceProvider serviceProvider = serviceProviderRepository.findById(id).orElse(null);
        if (serviceProvider != null) {
            serviceProvider.setName(serviceProviderDetails.getName());
            return serviceProviderRepository.save(serviceProvider);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteServiceProvider(@PathVariable Long id) {
        serviceProviderRepository.deleteById(id);
    }
}
